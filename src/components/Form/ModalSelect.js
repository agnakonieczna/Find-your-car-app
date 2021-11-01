import { useQuery } from 'react-query';
import Button from '../common/Button';
import { makeToLowerCase } from './Form';
import { ButtonWrapper, Input, Label, List, ListItem, RadioInput } from './Form.style';

const ModelSelect = ({
  decrement,
  increment,
  model,
  setModel,
  make,
  userModelSelect,
  setUserModelSelect
}) => {
  const {
    data: modelsOptions,
    isLoading,
    isError,
    error
  } = useQuery(
    ['models', make],
    () =>
      fetch(`http://localhost:8080/api/models?make=${makeToLowerCase(make)}`).then((resp) =>
        resp.json()
      ),
    {
      enabled: !!make
    }
  );

  if (make !== 'FORD' && make !== 'BMW') return <p>Vehicle not found</p>;

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error}</p>;

  return (
    <>
      <p>Step 2/6</p>
      <h2>Please select your car model</h2>
      <Input
        type='text'
        value={userModelSelect}
        onChange={(e) => setUserModelSelect(e.target.value)}
      />
      <List>
        {modelsOptions
          .filter((modelOption) => modelOption.startsWith(userModelSelect))
          .map((modelOption, index) => {
            return (
              <ListItem key={index}>
                <RadioInput
                  type='radio'
                  name='model'
                  value={modelOption}
                  onChange={(e) => setModel(e.target.value)}
                />
                <Label selected={modelOption === model}>{modelOption}</Label>
              </ListItem>
            );
          })}
      </List>
      <ButtonWrapper>
        <Button back onClick={decrement}>
          Back
        </Button>
        {model && <Button onClick={increment}>Next</Button>}
      </ButtonWrapper>
    </>
  );
};

export default ModelSelect;
