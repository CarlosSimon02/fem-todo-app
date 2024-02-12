import { useEffect, useState } from 'react';

import { CheckContainerIcon, CheckIndicatorIcon } from './checkbox.icons';
import { CheckBoxProps } from './checkbox.props';
import { StyledCheckboxButton } from './checkbox.styles';

const Checkbox = ({ checked, onClick }: CheckBoxProps) => {
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);
  const defaultChecked = checked ? checked : false;

  useEffect(() => {
    setIsTransitionEnabled(true);
  }, []);

  const handleButtonClick = () => {
    onClick && onClick();
  };

  return (
    <StyledCheckboxButton className={defaultChecked ? 'checked' : 'unchecked'} onClick={handleButtonClick}>
      <CheckContainerIcon />
      {defaultChecked && <CheckIndicatorIcon isTransitionEnabled={isTransitionEnabled} />}
      <input className="sr-only" type="checkbox" tabIndex={-1} defaultChecked={defaultChecked} />
    </StyledCheckboxButton>
  );
};

export default Checkbox;
