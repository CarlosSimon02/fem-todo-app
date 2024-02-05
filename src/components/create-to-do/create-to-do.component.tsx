import Checkbox from '../checkbox/checkbox.component';
import { StyledCreateToDoContainer, StyledCreateToDoInput } from './create-to-do.styles';

const CreateToDo = () => {
  return (
    <StyledCreateToDoContainer>
      <StyledCreateToDoInput type="text" placeholder="Create new to-do..." />
      <Checkbox />
    </StyledCreateToDoContainer>
  );
};

export default CreateToDo;
