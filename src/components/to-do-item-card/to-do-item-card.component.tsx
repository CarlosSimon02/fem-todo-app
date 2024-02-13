import { useState } from 'react';

import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd';

import { ToDoItem } from '../../contexts/to-do-items.context';
import useToDoItems from '../../hooks/useToDoItems.hook';
import Checkbox from '../checkbox/checkbox.component';
import RemoveItemButton from '../remove-item-button/remove-item-button.component';
import { StyledToDoItemCardContainer } from './to-do-item-card.styles';

type ToDoItemCardProps = {
  innerRef?: (element: HTMLElement | null) => void;
  draggableProps?: DraggableProvidedDraggableProps;
  draghandleProps?: DraggableProvidedDragHandleProps | null | undefined;
  toDoItem: ToDoItem;
  isDragging?: boolean;
};

const ToDoItemCard = ({ innerRef, draggableProps, draghandleProps, toDoItem, isDragging }: ToDoItemCardProps) => {
  const { id, isCompleted, task } = toDoItem;
  const [isChecked, setIsChecked] = useState(isCompleted);
  const { updateToDoItem } = useToDoItems();

  const toggleCheckHandler = () => {
    const newIsChecked = !isChecked;
    updateToDoItem({ ...toDoItem, isCompleted: newIsChecked });
    setIsChecked(newIsChecked);
  };

  return (
    <StyledToDoItemCardContainer
      ref={innerRef}
      {...draggableProps}
      {...draghandleProps}
      style={draggableProps && draggableProps.style}
      className={`${isChecked ? 'done' : ''} ${isDragging ? 'is-dragging' : ''}`}
    >
      <Checkbox checked={isChecked} onClick={toggleCheckHandler} />
      <p>{task}</p>
      <RemoveItemButton toDoItemID={id} />
    </StyledToDoItemCardContainer>
  );
};

export default ToDoItemCard;
