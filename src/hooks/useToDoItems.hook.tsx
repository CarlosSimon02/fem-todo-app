import { useContext } from 'react';

import { ToDoItemsContext } from '../contexts/to-do-items.context';

const useToDoItems = () => {
  const toDoItemsContext = useContext(ToDoItemsContext);

  if (!toDoItemsContext) {
    throw new Error('ToDoItemsContext is not provided');
  }

  return toDoItemsContext;
};

export default useToDoItems;
