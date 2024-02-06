import { useContext } from 'react';

import { ToDoItemsContext } from '../../contexts/to-do-items.context';
import { StyledCrossIcon, StyledRemoveItemButton } from './remove-item-button.styles';

type RemoveItemButtonProps = {
  toDoItemID: string;
};

const RemoveItemButton = ({ toDoItemID }: RemoveItemButtonProps) => {
  const toDoItemsContext = useContext(ToDoItemsContext);

  if (!toDoItemsContext) {
    throw new Error('CurrentThemeContext is not provided');
  }

  const { deleteToDoItem } = toDoItemsContext;

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
