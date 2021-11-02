import { useQuery } from 'react-query';
import Button from '../common/Button';
import SelectWithInput from './SelectWithInput';

const MakeSelect = ({ stepIncrement, make, setMake, userMakeSelect, setUserMakeSelect }) => {
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
        inputValue={userMakeSelect}
        setInputValue={setUserMakeSelect}
        options={makesOptions}
        state={make}
        setState={setMake}
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
