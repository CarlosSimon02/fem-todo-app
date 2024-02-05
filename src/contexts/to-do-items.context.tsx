import { createContext, useState } from 'react';

export enum FilterType {
  All = 'all',
  Done = 'done',
  Active = 'active',
}

type ToDoItem = {
  id: number;
  isDone: boolean;
  task: string;
};

type ToDoItemsContextProps = {
  toDoItems: ToDoItem[];
  filteredToDoItems: ToDoItem[];
  currentFilter: FilterType;
  createToDoItem: () => {};
  updateToDoItem: () => {};
  deleteToDoItem: () => {};
};

const ToDoItemsContext = createContext<ToDoItemsContextProps | undefined>(undefined);

const ToDoItemsProvider = () => {
  const [toDoItems, setToDoItems] = useState<ToDoItem[]>([]);
  return <ToDoItemsContext.Provider></ToDoItemsContext.Provider>;
};
