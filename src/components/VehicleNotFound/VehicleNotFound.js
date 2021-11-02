import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import Button from '../common/Button';
import { Wrapper, Info } from './VehicleNotFound.style';

const VehicleNotFound = () => {
  const { stepDecrement } = useContext(FormContext);
  return (
    <Wrapper>
      <h2>
        At the moment our car base is pretty small and we only support BMW 3er model and Ford Fiesta
        and C-Max models.
      </h2>
      <Button back onClick={stepDecrement}>
        Back
      </Button>
    </Wrapper>
  );
};

export default VehicleNotFound;
