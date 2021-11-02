import { createContext, useState } from 'react';

export const FormContext = createContext();

const FormProvider = (props) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [powerEngine, setPowerEngine] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');
  const [enginePowerUnits, setEnginePowerUnits] = useState('KW');
  const [userMakeInput, setUserMakeInput] = useState('');
  const [userModelInput, setUserModelInput] = useState('');
  const [step, setStep] = useState(1);
  
  const stepIncrement = () => {
    setStep((prev) => prev + 1);
  };

  const stepDecrement = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <FormContext.Provider
      value={{
        make,
        setMake,
        model,
        setModel,
        fuelType,
        setFuelType,
        bodyType,
        setBodyType,
        powerEngine,
        setPowerEngine,
        engineCapacity,
        setEngineCapacity,
        enginePowerUnits,
        setEnginePowerUnits,
        step,
        stepIncrement,
        stepDecrement,
        userMakeInput,
        setUserMakeInput,
        userModelInput,
        setUserModelInput
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormProvider;
