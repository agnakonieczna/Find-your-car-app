import { useContext } from 'react';
import { useQuery } from 'react-query';
import { FormContext } from '../../context/FormContext';
import Button from '../common/Button';
import SelectWithInput from './SelectWithInput';

const MakeSelect = () => {
  const { make, stepIncrement } = useContext(FormContext);

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
      <SelectWithInput
        step='1'
        name='make'
        options={makesOptions}
      />
      {make && (
        <Button singleBtn onClick={stepIncrement}>
          Next
        </Button>
      )}
    </>
  );
};

export default MakeSelect;
