import useToDoItems from '../../hooks/useToDoItems.hook';
import useWindow from '../../hooks/useWindow.hook';
import { BREAKPOINTS } from '../../styles/constants/breakpoints';
import BlankList from '../blank-list/blank-list.component';
import FilterBar from '../filter-bar/filter-bar.component';
import ToDoListDND from './to-do-list.dnd';
import { StyledClearCompletedButton, StyledControlsContainer, StyledToDoListContainer } from './to-do-list.styles';

const ToDoList = () => {
  const { innerWidth } = useWindow();
  const { filteredToDoItems, clearCompleted, activeItemsCount } = useToDoItems();

  return (
    <StyledToDoListContainer>
      {filteredToDoItems.length ? <ToDoListDND /> : <BlankList />}
      <StyledControlsContainer>
        <p>{activeItemsCount} items left</p>
        {innerWidth >= BREAKPOINTS.UP.TABLET && <FilterBar />}
        <StyledClearCompletedButton onClick={clearCompleted}>Clear Completed</StyledClearCompletedButton>
      </StyledControlsContainer>
    </StyledToDoListContainer>
  );
};

export default ToDoList;
