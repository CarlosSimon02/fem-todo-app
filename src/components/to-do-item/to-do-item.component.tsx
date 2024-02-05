import Checkbox from '../checkbox/checkbox.component';
import { StyledToDoItemContainer } from './to-do-item.styles';

const ToDoItem = () => {
  return (
    <StyledToDoItemContainer>
      <Checkbox />
      <p>Hello world</p>
    </StyledToDoItemContainer>
  );
};

export default ToDoItem;
