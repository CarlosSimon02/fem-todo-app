import useToDoItems from '../../hooks/useToDoItems.hook';
import { StyledCrossIcon, StyledRemoveItemButton } from './remove-item-button.styles';

type RemoveItemButtonProps = {
  toDoItemID: string;
};

const RemoveItemButton = ({ toDoItemID }: RemoveItemButtonProps) => {
  const { deleteToDoItem } = useToDoItems();

  const buttonClickHandler = () => {
    deleteToDoItem(toDoItemID);
  };

  return (
    <StyledRemoveItemButton onClick={buttonClickHandler}>
      <StyledCrossIcon />
      <p className="sr-only"></p>
    </StyledRemoveItemButton>
  );
};

export default RemoveItemButton;
