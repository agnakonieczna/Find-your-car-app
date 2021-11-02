import { useContext } from 'react';
import { useQuery } from 'react-query';
import { FormContext } from '../../context/FormContext';
import Button from '../common/Button';
import { makeToLowerCase } from './Form';
import { ButtonWrapper } from './Form.style';
import SelectWithInput from './SelectWithInput';

const ModelSelect = () => {
  const { make, model, stepIncrement, stepDecrement } = useContext(FormContext);

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
      <SelectWithInput
        step='2'
        name='model'
        options={modelsOptions}
      />
      <ButtonWrapper>
        <Button back onClick={stepDecrement}>
          Back
        </Button>
        {model && modelsOptions.includes(model) && <Button onClick={stepIncrement}>Next</Button>}
      </ButtonWrapper>
    </>
  );
};

export default ModelSelect;
