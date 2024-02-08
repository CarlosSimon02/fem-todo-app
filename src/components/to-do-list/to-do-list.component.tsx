import { useContext } from 'react';

import { ToDoItemsContext } from '../../contexts/to-do-items.context';
import FilterBar from '../filter-bar/filter-bar.component';
import ToDoItemCard from '../to-do-item-card/to-do-item-card.component';
import { StyledClearCompletedButton, StyledControlsContainer, StyledToDoListContainer } from './to-do-list.styles';

const ToDoList = () => {
  const toDoItemsContext = useContext(ToDoItemsContext);

  if (!toDoItemsContext) {
    throw new Error('CurrentThemeContext is not provided');
  }

  const { clearCompleted, filteredToDoItems, activeItemsCount } = toDoItemsContext;

  return (
    <StyledToDoListContainer>
      {filteredToDoItems.map((item) => {
        return <ToDoItemCard key={item.id} toDoItem={item} />;
      })}
      <StyledControlsContainer>
        <p>{activeItemsCount} items left</p>
        <FilterBar />
        <StyledClearCompletedButton onClick={clearCompleted}>Clear Completed</StyledClearCompletedButton>
      </StyledControlsContainer>
    </StyledToDoListContainer>
  );
};

export default ToDoList;
