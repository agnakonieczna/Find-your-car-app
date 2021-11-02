import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import Button from '../common/Button';
import { ButtonWrapper, Content, Info, Bold } from './Form.style';

const SelectedVehicle = ({ filteredVehicles, setFormVisible }) => {
  const [selectedVehicle] = filteredVehicles;
  const { stepDecrement } = useContext(FormContext);

  if (!filteredVehicles.length) return <p>We don't have car with provided parameters.</p>;

  return (
    <div>
      <Content>
        <h2>Selected vehicle:</h2>
        <Info>
          <p>
            <Bold>Make:</Bold> {selectedVehicle.make}
          </p>
          <p>
            <Bold>Model:</Bold> {selectedVehicle.model}
          </p>
          <p>
            <Bold>Body type:</Bold> {selectedVehicle.bodyType}
          </p>
          <p>
            <Bold>Fuel type:</Bold> {selectedVehicle.fuelType}
          </p>
          <p>
            <Bold>Engine power KW:</Bold> {selectedVehicle.enginePowerKW} KW
          </p>
          <p>
            <Bold>Engine power PS:</Bold> {selectedVehicle.enginePowerPS} PS
          </p>
          <p>
            <Bold>Engine capacity:</Bold> {selectedVehicle.engineCapacity} CC
          </p>
        </Info>
        <ButtonWrapper>
          <Button last back onClick={stepDecrement}>
            Back
          </Button>
          <Button last onClick={() => setFormVisible(false)}>
            Again
          </Button>
        </ButtonWrapper>
      </Content>
    </div>
  );
};

export default SelectedVehicle;
