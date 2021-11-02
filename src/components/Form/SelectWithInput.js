import { Input, List, ListItem, RadioInput, Label } from './Form.style';

const SelectWithInput = ({ step, name, inputValue, setInputValue, options, state, setState }) => {
  return (
    <>
      <p>Step {step}/6</p>
      <h2>Please select your car {name}</h2>
      <Input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <List onChange={(e) => setState(e.target.value)}>
        {options
          .filter((option) => option.toUpperCase().startsWith(inputValue.toUpperCase()))
          .map((option, index) => (
            <ListItem key={index}>
              <RadioInput name='make' type='radio' value={option} />
              <Label selected={option === state}>{option}</Label>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default SelectWithInput;
