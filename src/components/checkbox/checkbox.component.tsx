import { useState } from 'react';

import { StyledCheckboxContainer, StyledCheckIcon } from './checkbox.styles';

type CheckBoxProps = {
  checked?: boolean;
};

const Checkbox = ({ checked }: CheckBoxProps) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const toggleCheckHandler = () => setIsChecked((prev) => !prev);

  return (
    <StyledCheckboxContainer className={isChecked ? 'checked' : 'unchecked'} onClick={toggleCheckHandler}>
      {isChecked && <StyledCheckIcon />}
      <input className="sr-only" type="checkbox" checked={isChecked} />
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
