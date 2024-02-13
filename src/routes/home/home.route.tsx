import CreateToDo from '../../components/create-to-do/create-to-do.component';
import FilterBar from '../../components/filter-bar/filter-bar.component';
import ToDoList from '../../components/to-do-list/to-do-list.component';
import { FilterType } from '../../contexts/to-do-items.context';
import useToDoItems from '../../hooks/useToDoItems.hook';
import useWindow from '../../hooks/useWindow.hook';
import { BREAKPOINTS } from '../../styles/constants/breakpoints';
import { StyledDNDIndicator, StyledHomeContainer } from './home.styles';

const Home = () => {
  const { innerWidth } = useWindow();
  const { currentFilter } = useToDoItems();

  return (
    <StyledHomeContainer>
      <CreateToDo />
      <ToDoList />
      {innerWidth < BREAKPOINTS.UP.TABLET && <FilterBar />}
      {FilterType.All === currentFilter && <StyledDNDIndicator>Drag and drop to reorder list</StyledDNDIndicator>}
    </StyledHomeContainer>
  );
};

export default Home;
