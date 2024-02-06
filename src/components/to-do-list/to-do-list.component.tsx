import { useContext } from 'react';

import { ToDoItemsContext } from '../../contexts/to-do-items.context';
import ToDoItemCard from '../to-do-item-card/to-do-item-card.component';
import { StyledControlsContainer, StyledToDoListContainer } from './to-do-list.styles';

const ToDoList = () => {
  const toDoItemsContext = useContext(ToDoItemsContext);

  if (!toDoItemsContext) {
    throw new Error('CurrentThemeContext is not provided');
  }

  const { filteredToDoItems } = toDoItemsContext;

  return (
    <StyledToDoListContainer>
      {filteredToDoItems.map((item) => {
        return <ToDoItemCard key={item.id} toDoItem={item} />;
      })}
      <StyledControlsContainer>
        <p>5 items left</p>
        <p>Clear Completed</p>
      </StyledControlsContainer>
    </StyledToDoListContainer>
  );
};

export default ToDoList;
