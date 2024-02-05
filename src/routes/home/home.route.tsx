import CreateToDo from '../../components/create-to-do/create-to-do.component';
import ToDoList from '../../components/to-do-list/to-do-list.component';
import { StyledHomeContainer } from './home.styles';

const Home = () => {
  return (
    <StyledHomeContainer>
      <CreateToDo />
      <ToDoList />
    </StyledHomeContainer>
  );
};

export default Home;
