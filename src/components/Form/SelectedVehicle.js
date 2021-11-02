import Button from '../common/Button';
import { Content, Info } from './Form.style';

const SelectedVehicle = ({ filteredVehicles, decrement, setFormVisible }) => {
  const [selectedVehicle] = filteredVehicles;

  if (!filteredVehicles.length) return <p>We don't have car with provided parameters.</p>;

  return (
    <div>
      <Content>
        <h2>Selected vehicle:</h2>
        <Info>
          <p>Make: {selectedVehicle.make}</p>
          <p>Model: {selectedVehicle.model}</p>
          <p>Body type: {selectedVehicle.bodyType}</p>
          <p>Fuel type: {selectedVehicle.fuelType}</p>
          <p>Engine power: {selectedVehicle.enginePowerKW} KW</p>
          <p>Engine capacity: {selectedVehicle.engineCapacity} CC</p>
        </Info>
        <Button last back onClick={decrement}>
          Back
        </Button>
        <Button last onClick={() => setFormVisible(false)}>
          Again
        </Button>
      </Content>
    </div>
  );
};

export default SelectedVehicle;