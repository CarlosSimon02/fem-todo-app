import CreateToDo from '../../components/create-to-do/create-to-do.component';
import FilterBar from '../../components/filter-bar/filter-bar.component';
import ToDoList from '../../components/to-do-list/to-do-list.component';
import useWindow from '../../hooks/useWindow.hook';
import { BREAKPOINTS } from '../../styles/constants/breakpoints';
import { StyledHomeContainer } from './home.styles';

const Home = () => {
  const { innerWidth } = useWindow();

  return (
    <StyledHomeContainer>
      <CreateToDo />
      <ToDoList />
      {innerWidth < BREAKPOINTS.UP.TABLET && <FilterBar />}
    </StyledHomeContainer>
  );
};

export default Home;
