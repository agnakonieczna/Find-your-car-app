import { useState, useEffect } from 'react';
import Button from '../common/Button';
import EnginePowerUnits from './EnginePowerUnits';
import { Label, RadioInput, ListItem, ButtonWrapper } from './Form.style';

const FiltersSelect = ({
  vehicles,
  isLoading,
  isError,
  error,
  name,
  state,
  setState,
  stepIncrement,
  stepDecrement,
  step,
  model,
  setEnginePowerUnits,
  enginePowerUnits
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const valueOptions = vehicles.map((vehicle) => {
      return vehicle[name];
    });
    const valueOptionsSet = new Set(valueOptions);
    setOptions(Array.from(valueOptionsSet).sort((a, b) => (a > b ? 1 : -1)));
  }, [vehicles, name]);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error}</p>;

  if (name === 'fuelType' && model !== '3er' && model !== 'C-Max' && model !== 'Fiesta')
    return <p>Vehicle not found</p>;

  const textToDisplay = (option) => {
    switch (name) {
      case 'fuelType':
        return { title: 'What fuel do you tank?', label: option };
      case 'bodyType':
        return { title: 'What body type does your car have?', label: option };
      case 'enginePowerKW':
        return { title: 'What power engine does your car have?', label: option + ' KW' };
      case 'enginePowerPS':
        return { title: 'What power engine does your car have?', label: option + ' PS' };
      case 'engineCapacity':
        return { title: 'What engine capacity does your car have?', label: option + ' CC' };
      default:
        return { title: '', label: '' };
    }
  };

  return (
    <>
      <p>Step {step.toString()}/6</p>
      <h2>{textToDisplay().title}</h2>
      {name.startsWith('enginePower') ? (
        <EnginePowerUnits
          setEnginePowerUnits={setEnginePowerUnits}
          enginePowerUnits={enginePowerUnits}
        />
      ) : null}
      <ul onChange={(e) => setState(e.target.value)}>
        {options.map((singleOption, index) => {
          return (
            <ListItem key={index}>
              <RadioInput name={name} type='radio' value={singleOption} />
              <Label selected={singleOption.toString() === state}>
                {textToDisplay(singleOption).label}
              </Label>
            </ListItem>
          );
        })}
      </ul>
      <ButtonWrapper>
        <Button back onClick={stepDecrement}>
          Back
        </Button>
        {state &&
          options.includes(
            name.startsWith('enginePower') || name === 'engineCapacity' ? +state : state
          ) && <Button onClick={stepIncrement}>Next</Button>}
      </ButtonWrapper>
    </>
  );
};

export default FiltersSelect;
