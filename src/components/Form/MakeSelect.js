import { useQuery } from 'react-query';
import Button from '../common/Button';
import { Input, Label, RadioInput, List, ListItem } from './Form.style';

const MakeSelect = ({ increment, make, setMake, userMakeSelect, setUserMakeSelect }) => {
  const {
    isLoading,
    isError,
    error,
    data: makesOptions
  } = useQuery('makes', () => fetch('http://localhost:8080/api/makes').then((resp) => resp.json()));

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error}</p>;

  return (
    <>
      <p>Step 1/6</p>
      <h2>Please select your car make</h2>
      <Input
        type='text'
        value={userMakeSelect}
        onChange={(e) => setUserMakeSelect(e.target.value)}
      />
      <List>
        {makesOptions
          .filter((makeOption) => makeOption.startsWith(userMakeSelect.toUpperCase()))
          .map((makeOption, index) => (
            <ListItem key={index}>
              <RadioInput
                name='make'
                type='radio'
                value={makeOption}
                onChange={(e) => setMake(e.target.value)}
              />
              <Label selected={makeOption === make}>{makeOption}</Label>
            </ListItem>
          ))}
      </List>
      {make && (
        <Button singleBtn onClick={increment}>
          Next
        </Button>
      )}
    </>
  );
};

export default MakeSelect;
