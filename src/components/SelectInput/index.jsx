import { useState } from 'react';
import {
  Container,
  CurrentSelect,
  SelectItem,
  SelectList,
} from './SelectInputStyles';

const SelectInput = ({ options, name, setFieldValue }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isShow, setIsShow] = useState(false);

  const handleSelect = (item) => {
    setSelected(item);
    setFieldValue(name, item);
    setIsShow(false);
  };

  return (
    <Container>
      <CurrentSelect onClick={() => setIsShow(true)}>{selected}</CurrentSelect>
      {isShow && (
        <SelectList>
          {options.map((option) => (
            <SelectItem
              key={option}
              active={selected === option}
              onClick={() => handleSelect(option)}
            >
              {option}
            </SelectItem>
          ))}
        </SelectList>
      )}
    </Container>
  );
};

export default SelectInput;
