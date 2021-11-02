import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import { Label, RadioInput, EnginePowerList, ListItem } from './Form.style';

const EnginePowerUnits = () => {
  const { enginePowerUnits, setEnginePowerUnits } = useContext(FormContext);
  return (
    <EnginePowerList onChange={(e) => setEnginePowerUnits(e.target.value)}>
      <ListItem small>
        <Label selected={enginePowerUnits === 'KW'}>KW</Label>
        <RadioInput type='radio' name='unit' value='KW' defaultChecked />
      </ListItem>
      <ListItem small style={{ position: 'relative' }}>
        <Label selected={enginePowerUnits === 'PS'}>PS</Label>
        <RadioInput type='radio' name='unit' value='PS' />
      </ListItem>
    </EnginePowerList>
  );
};

export default EnginePowerUnits;
