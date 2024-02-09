import { motion } from 'framer-motion';

import { CheckCircleIcon } from './checkbox.animates';
import { StyledCheckboxButton, StyledDefaultCircleIcon } from './checkbox.styles';

const AnimatedCheckboxButton = motion(StyledCheckboxButton);

type CheckBoxProps = {
  checked?: boolean;
  onClick?: () => void;
};

const Checkbox = ({ checked, onClick }: CheckBoxProps) => {
  const defaultChecked = checked ? checked : false;

  const handleButtonClick = () => {
    onClick && onClick();
  };

  return (
    <AnimatedCheckboxButton className={defaultChecked ? 'checked' : 'unchecked'} onClick={handleButtonClick}>
      <StyledDefaultCircleIcon />
      {defaultChecked && <CheckCircleIcon />}
      <input className="sr-only" type="checkbox" defaultChecked={defaultChecked} />
    </AnimatedCheckboxButton>
  );
};

export default Checkbox;
