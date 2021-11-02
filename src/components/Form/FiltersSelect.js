import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../context/FormContext';
import Button from '../common/Button';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import VehicleNotFound from '../VehicleNotFound/VehicleNotFound';
import EnginePowerUnits from './EnginePowerUnits';
import { ButtonWrapper, Label, ListItem, RadioInput } from './Form.style';

const FiltersSelect = ({ vehicles, isLoading, isError, error, name }) => {
  const [options, setOptions] = useState([]);

  const {
    model,
    fuelType,
    setFuelType,
    bodyType,
    setBodyType,
    powerEngine,
    setPowerEngine,
    engineCapacity,
    setEngineCapacity,
    step,
    stepIncrement,
    stepDecrement
  } = useContext(FormContext);

  //getting options of fuelType, bodyType and engineType available for the make and model user chosen
  useEffect(() => {
    const valueOptions = vehicles.map((vehicle) => {
      return vehicle[name];
    });
    const valueOptionsSet = new Set(valueOptions);
    setOptions(Array.from(valueOptionsSet).sort((a, b) => (a > b ? 1 : -1)));
  }, [vehicles, name]);

  if (isLoading) return <Loading />;

  if (isError) return <Error error={error} />;

  if (name === 'fuelType' && model !== '3er' && model !== 'C-Max' && model !== 'Fiesta')
    return <VehicleNotFound />;

  //getting component information and state
  const componentInfo = (option) => {
    switch (name) {
      case 'fuelType':
        return {
          title: 'What fuel do you tank?',
          label: option,
          state: fuelType,
          setState: setFuelType
        };
      case 'bodyType':
        return {
          title: 'What body type does your car have?',
          label: option,
          state: bodyType,
          setState: setBodyType
        };
      case 'enginePowerKW':
        return {
          title: 'What power engine does your car have?',
          label: option + ' KW',
          state: powerEngine,
          setState: setPowerEngine
        };
      case 'enginePowerPS':
        return {
          title: 'What power engine does your car have?',
          label: option + ' PS',
          state: powerEngine,
          setState: setPowerEngine
        };
      case 'engineCapacity':
        return {
          title: 'What engine capacity does your car have?',
          label: option + ' CC',
          state: engineCapacity,
          setState: setEngineCapacity
        };
    }
  };

  return (
    <>
      <p>Step {step.toString()}/6</p>
      <h2>{componentInfo().title}</h2>
      {name.startsWith('enginePower') ? <EnginePowerUnits /> : null}
      <ul onChange={(e) => componentInfo().setState(e.target.value)}>
        {options.map((singleOption, index) => {
          return (
            <ListItem key={index}>
              <RadioInput name={name} type='radio' value={singleOption} />
              <Label selected={singleOption.toString() === componentInfo().state}>
                {componentInfo(singleOption).label}
              </Label>
            </ListItem>
          );
        })}
      </ul>
      <ButtonWrapper>
        <Button back onClick={stepDecrement}>
          Back
        </Button>
        {componentInfo().state &&
          options.includes(
            name.startsWith('enginePower') || name === 'engineCapacity'
              ? +componentInfo().state
              : componentInfo().state
          ) && <Button onClick={stepIncrement}>Next</Button>}
      </ButtonWrapper>
    </>
  );
};

export default FiltersSelect;
