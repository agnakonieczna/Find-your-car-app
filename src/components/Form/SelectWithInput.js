import { useContext } from 'react';
import { Input, List, ListItem, RadioInput, Label } from './Form.style';
import { FormContext } from '../../context/FormContext';

const SelectWithInput = ({ step, name, options }) => {
  const {
    userMakeInput,
    setUserMakeInput,
    userModelInput,
    setUserModelInput,
    make,
    setMake,
    model,
    setModel
  } = useContext(FormContext);

  const componentState = () => {
    if (name === 'make') {
      return {
        inputValue: userMakeInput,
        setInputValue: setUserMakeInput,
        state: make,
        setState: setMake
      };
    } else {
      return {
        inputValue: userModelInput,
        setInputValue: setUserModelInput,
        state: model,
        setState: setModel
      };
    }
  };

  return (
    <>
      <p>Step {step}/6</p>
      <h2>Please select your car {name}</h2>
      <Input
        type='text'
        value={componentState().inputValue}
        onChange={(e) => componentState().setInputValue(e.target.value)}
      />
      <List onChange={(e) => componentState().setState(e.target.value)}>
        {options
          .filter((option) =>
            option.toUpperCase().startsWith(componentState().inputValue.toUpperCase())
          )
          .map((option, index) => (
            <ListItem key={index}>
              <RadioInput name='make' type='radio' value={option} />
              <Label selected={option === componentState().state}>{option}</Label>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default SelectWithInput;
