import { useState } from 'react';
import MakeSelect from './MakeSelect';
import ModelSelect from './ModalSelect';
import Container from '../common/Container';
import { Wrapper } from './Form.style';

export const makeToLowerCase = (value) => value.split('')[0] + value.split('').slice(1).join('').toLowerCase();

const Form = ({ setFormVisible }) => {
  const [step, setStep] = useState(1);
  const [make, setMake] = useState('');
  const [userMakeSelect, setUserMakeSelect] = useState('');
  const [model, setModel] = useState('');
  const [userModelSelect, setUserModelSelect] = useState('');

  const stepIncrement = () => {
    setStep((prev) => prev + 1);
  };

  const stepDecrement = () => {
    setStep((prev) => prev - 1);
  };

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
      </Container>
    </Wrapper>
  );
};

export default Form;
