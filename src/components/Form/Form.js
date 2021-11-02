import { useContext } from 'react';
import { useQuery } from 'react-query';
import Container from '../common/Container';
import FiltersSelect from './FiltersSelect';
import { Wrapper } from './Form.style';
import MakeSelect from './MakeSelect';
import ModelSelect from './ModelSelect';
import SelectedVehicle from './SelectedVehicle';
import { FormContext } from '../../context/FormContext';

export const makeToLowerCase = (value) =>
  value.split('')[0] + value.split('').slice(1).join('').toLowerCase();

const Form = ({ setFormVisible }) => {
  const { make, model, fuelType, bodyType, powerEngine, engineCapacity, enginePowerUnits, step } =
    useContext(FormContext);

  const {
    isLoading,
    isError,
    error,
    data: vehicles
  } = useQuery(
    ['vehicles', model, make],
    () => {
      return fetch(
        `http://localhost:8080/api/vehicles?make=${makeToLowerCase(make)}&model=${model}`
      ).then((resp) => resp.json());
    },
    {
      enabled: !!model,
      initialData: []
    }
  );

  return (
    <Wrapper>
      <Container>
        {step === 1 && <MakeSelect />}
        {step === 2 && <ModelSelect />}
        {step === 3 && (
          <FiltersSelect
            vehicles={vehicles}
            isLoading={isLoading}
            isError={isError}
            error={error}
            name='fuelType'
          />
        )}
        {step === 4 && (
          <FiltersSelect
            vehicles={vehicles.filter((vehicle) => vehicle.fuelType === fuelType)}
            name='bodyType'
          />
        )}
        {step === 5 && (
          <FiltersSelect
            vehicles={vehicles.filter(
              (vehicle) => vehicle.fuelType === fuelType && vehicle.bodyType === bodyType
            )}
            name={enginePowerUnits === 'KW' ? 'enginePowerKW' : 'enginePowerPS'}
          />
        )}
        {step === 6 && (
          <FiltersSelect
            vehicles={vehicles.filter(
              (vehicle) =>
                vehicle.fuelType === fuelType &&
                vehicle.bodyType === bodyType &&
                (enginePowerUnits === 'KW'
                  ? vehicle.enginePowerKW === +powerEngine
                  : vehicle.enginePowerPS === +powerEngine)
            )}
            name='engineCapacity'
          />
        )}
        {step === 7 && (
          <SelectedVehicle
            filteredVehicles={vehicles.filter(
              (vehicle) =>
                vehicle.fuelType === fuelType &&
                vehicle.bodyType === bodyType &&
                vehicle.engineCapacity === +engineCapacity &&
                (enginePowerUnits === 'KW'
                  ? vehicle.enginePowerKW === +powerEngine
                  : vehicle.enginePowerPS === +powerEngine)
            )}
            setFormVisible={setFormVisible}
          />
        )}
      </Container>
    </Wrapper>
  );
};

export default Form;
