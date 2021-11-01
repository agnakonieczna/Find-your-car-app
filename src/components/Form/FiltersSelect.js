import { useState, useEffect } from 'react';
import Button from '../common/Button';
import { Label, RadioInput, ListItem, ButtonWrapper } from './Form.style';

const FiltersSelect = ({
  vehicles,
  isLoading,
  isError,
  error,
  name,
  state,
  setState,
  increment,
  decrement,
  step,
  model
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const valueOptions = vehicles.map((vehicle) => {
      return name === 'enginePowerKW' || name === 'engineCapacity'
        ? vehicle[name].toString()
        : vehicle[name];
    });

    const valueOptionsSet = new Set(valueOptions);
    setOptions(Array.from(valueOptionsSet).sort((a, b) => (a > b ? 1 : -1)));
  }, [vehicles, name]);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error}</p>;

  if (name === 'fuelType' && model !== '3er' && model !== 'C-Max' && model !== 'Fiesta')
    return <p>Vehicle not found</p>;

  const getTitle = () => {
    switch (name) {
      case 'fuelType':
        return 'What fuel do you tank?';
      case 'bodyType':
        return 'What body type does your car have?';
      case 'enginePowerKW':
        return 'What power engine does your car have?';
      case 'engineCapacity':
        return 'What engine capacity does your car have?';
    }
  };

  return (
    <>
      <p>{step.toString()}/6</p>
      <h2>{getTitle()}</h2>
      <ul>
        {options.map((singleOption, index) => {
          return (
            <ListItem key={index}>
              <RadioInput
                name={name}
                type='radio'
                value={singleOption}
                onChange={(e) => setState(e.target.value)}
              />
              <Label selected={singleOption === state}>
                {name === 'enginePowerKW' ? singleOption + ' KW' : singleOption}
              </Label>
            </ListItem>
          );
        })}
      </ul>
      <ButtonWrapper>
        <Button back onClick={decrement}>
          Back
        </Button>
        {state && options.includes(state) && <Button onClick={increment}>Next</Button>}
      </ButtonWrapper>
    </>
  );
};

export default FiltersSelect;