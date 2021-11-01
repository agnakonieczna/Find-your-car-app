import { useState } from 'react';
import MakeSelect from './MakeSelect';
import ModelSelect from './ModalSelect';
import Container from '../common/Container';
import FiltersSelect from './FiltersSelect';
import { Wrapper } from './Form.style';
import { useQuery } from 'react-query';

export const makeToLowerCase = (value) =>
  value.split('')[0] + value.split('').slice(1).join('').toLowerCase();

const Form = ({ setFormVisible }) => {
  const [step, setStep] = useState(1);
  const [make, setMake] = useState('');
  const [userMakeSelect, setUserMakeSelect] = useState('');
  const [model, setModel] = useState('');
  const [userModelSelect, setUserModelSelect] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [powerEngine, setPowerEngine] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');

  const stepIncrement = () => {
    setStep((prev) => prev + 1);
  };

  const stepDecrement = () => {
    setStep((prev) => prev - 1);
  };

  const {
    isLoading,
    isError,
    error,
    data: vehicles
  } = useQuery(
    ['vehicles', model, make],
    () => {
      console.log('fetch');
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
        {step === 1 && (
          <MakeSelect
            increment={stepIncrement}
            make={make}
            setMake={setMake}
            setStep={setStep}
            setUserMakeSelect={setUserMakeSelect}
            userMakeSelect={userMakeSelect}
          />
        )}
        {step === 2 && (
          <ModelSelect
            increment={stepIncrement}
            decrement={stepDecrement}
            model={model}
            setModel={setModel}
            make={make}
            userModelSelect={userModelSelect}
            setUserModelSelect={setUserModelSelect}
          />
        )}
        {step === 3 && (
          <FiltersSelect
            increment={stepIncrement}
            decrement={stepDecrement}
            vehicles={vehicles}
            isLoading={isLoading}
            isError={isError}
            error={error}
            setState={setFuelType}
            name='fuelType'
            state={fuelType}
            step={step}
            model={model}
          />
        )}
        {step === 4 && (
          <FiltersSelect
            vehicles={vehicles.filter((vehicle) => vehicle.fuelType === fuelType)}
            setState={setBodyType}
            increment={stepIncrement}
            decrement={stepDecrement}
            name='bodyType'
            state={bodyType}
            step={step}
          />
        )}
        {step === 5 && (
          <FiltersSelect
            vehicles={vehicles.filter(
              (vehicle) => vehicle.fuelType === fuelType && vehicle.bodyType === bodyType
            )}
            setState={setPowerEngine}
            increment={stepIncrement}
            decrement={stepDecrement}
            name='enginePowerKW'
            state={powerEngine}
            step={step}
          />
        )}
        {step === 6 && (
          <FiltersSelect
            vehicles={vehicles.filter(
              (vehicle) =>
                vehicle.fuelType === fuelType &&
                vehicle.bodyType === bodyType &&
                vehicle.enginePowerKW === +powerEngine
            )}
            setState={setEngineCapacity}
            increment={stepIncrement}
            decrement={stepDecrement}
            name='engineCapacity'
            state={engineCapacity}
            step={step}
          />
        )}
      </Container>
    </Wrapper>
  );
};

export default Form;
