import { useEffect, useState } from 'react';

import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';

import { FilterType, ToDoItem } from '../../contexts/to-do-items.context';
import useToDoItems from '../../hooks/useToDoItems.hook';
import ToDoItemCard from '../to-do-item-card/to-do-item-card.component';
import { StyledList } from './to-do-list.styles';

const reorder = (list: ToDoItem[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const ToDoListDND = () => {
  const { toDoItems, filteredToDoItems, setAndStoreToDoItems, currentFilter } = useToDoItems();
  const [droppableId, setDroppableId] = useState('droppable');

  useEffect(() => {
    if (filteredToDoItems.length) {
      setDroppableId('todos');
    }
  }, [filteredToDoItems.length]);

  const dragEndHandler = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(toDoItems, result.source.index, result.destination.index);

    setAndStoreToDoItems(items);
  };

  return (
    //disable drag and drop if current filter is not "all"
    FilterType.All === currentFilter ? (
      <DragDropContext onDragEnd={dragEndHandler}>
        <Droppable key={droppableId} droppableId={droppableId}>
          {(provided) => (
            <StyledList {...provided.droppableProps} ref={provided.innerRef}>
              {filteredToDoItems.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => {
                      return (
                        <ToDoItemCard
                          innerRef={provided.innerRef}
                          draggableProps={provided.draggableProps}
                          draghandleProps={provided.dragHandleProps}
                          toDoItem={item}
                          isDragging={snapshot.isDragging}
                        />
                      );
                    }}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </StyledList>
          )}
        </Droppable>
      </DragDropContext>
    ) : (
      <StyledList>
        {filteredToDoItems.map((item) => {
          return <ToDoItemCard key={item.id} toDoItem={item} />;
        })}
      </StyledList>
    )
  );
};

export default ToDoListDND;
