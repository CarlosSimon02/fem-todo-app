import { StyledCheckboxButton, StyledCheckIcon } from './checkbox.styles';

type CheckBoxProps = {
  checked?: boolean;
  onClick?: () => void;
};

const Checkbox = ({ checked, onClick }: CheckBoxProps) => {
  const defaultChecked = checked ? checked : false;

  return (
    <StyledCheckboxButton className={defaultChecked ? 'checked' : 'unchecked'} onClick={onClick}>
      {defaultChecked && <StyledCheckIcon />}
      <input className="sr-only" type="checkbox" defaultChecked={defaultChecked} />
    </StyledCheckboxButton>
  );
};

export default Checkbox;
