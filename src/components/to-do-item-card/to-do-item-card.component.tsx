import { useContext, useState } from 'react';

import { ToDoItem, ToDoItemsContext } from '../../contexts/to-do-items.context';
import Checkbox from '../checkbox/checkbox.component';
import RemoveItemButton from '../remove-item-button/remove-item-button.component';
import { StyledToDoItemCardContainer } from './to-do-item-card.styles';

type ToDoItemCardProps = {
  key?: string;
  toDoItem: ToDoItem;
};

const ToDoItemCard = ({ toDoItem }: ToDoItemCardProps) => {
  const { id, isDone, task } = toDoItem;
  const [isChecked, setIsChecked] = useState(isDone);
  const toDoItemsContext = useContext(ToDoItemsContext);

  if (!toDoItemsContext) {
    throw new Error('CurrentThemeContext is not provided');
  }

  const { updateToDoItem } = toDoItemsContext;

  const toggleCheckHandler = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    updateToDoItem({ ...toDoItem, isDone: newIsChecked });
  };

  return (
    <StyledToDoItemCardContainer className={isChecked ? 'done' : ''}>
      <Checkbox checked={isChecked} onClick={toggleCheckHandler} />
      <p>{task}</p>
      <RemoveItemButton toDoItemID={id} />
    </StyledToDoItemCardContainer>
  );
};

export default ToDoItemCard;
