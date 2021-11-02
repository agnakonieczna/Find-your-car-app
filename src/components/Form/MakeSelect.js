import { useContext } from 'react';
import { useQuery } from 'react-query';
import { FormContext } from '../../context/FormContext';
import Button from '../common/Button';
import Loading from '../Loading/Loading';
import SelectWithInput from './SelectWithInput';
import Error from '../Error/Error';
import { ButtonWrapper } from './Form.style';

const MakeSelect = () => {
  const { make, stepIncrement } = useContext(FormContext);

  const {
    isLoading,
    isError,
    error,
    data: makesOptions
  } = useQuery('makes', () => fetch('http://localhost:8080/api/makes').then((resp) => resp.json()));

  if (isLoading) return <Loading />;

  if (isError) return <Error error={error} />;

  return (
    <>
      <SelectWithInput step='1' name='make' options={makesOptions} />
      <ButtonWrapper>
        {make && (
          <Button singleBtn onClick={stepIncrement}>
            Next
          </Button>
        )}
      </ButtonWrapper>
    </>
  );
};

export default MakeSelect;
