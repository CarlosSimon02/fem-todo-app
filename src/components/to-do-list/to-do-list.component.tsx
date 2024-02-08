import useToDoItems from '../../hooks/useToDoItems.hook';
import useWindow from '../../hooks/useWindow.hook';
import { BREAKPOINTS } from '../../styles/constants/breakpoints';
import FilterBar from '../filter-bar/filter-bar.component';
import ToDoItemCard from '../to-do-item-card/to-do-item-card.component';
import { StyledClearCompletedButton, StyledControlsContainer, StyledToDoListContainer } from './to-do-list.styles';

const ToDoList = () => {
  const { innerWidth } = useWindow();
  const { clearCompleted, filteredToDoItems, activeItemsCount } = useToDoItems();

  return (
    <StyledToDoListContainer>
      {filteredToDoItems.map((item) => {
        return <ToDoItemCard key={item.id} toDoItem={item} />;
      })}
      <StyledControlsContainer>
        <p>{activeItemsCount} items left</p>
        {innerWidth >= BREAKPOINTS.UP.TABLET && <FilterBar />}
        <StyledClearCompletedButton onClick={clearCompleted}>Clear Completed</StyledClearCompletedButton>
      </StyledControlsContainer>
    </StyledToDoListContainer>
  );
};

export default ToDoList;
