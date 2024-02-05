import ToDoItem from '../to-do-item/to-do-item.component';
import { StyledControlsContainer, StyledToDoListContainer } from './to-do-list.styles';

const ToDoList = () => {
  return (
    <StyledToDoListContainer>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <StyledControlsContainer>
        <p>5 items left</p>
        <p>Clear Completed</p>
      </StyledControlsContainer>
    </StyledToDoListContainer>
  );
};

export default ToDoList;
