import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

export enum FilterType {
  All = 'all',
  Completed = 'completed',
  Active = 'active',
}

export type ToDoItem = {
  id: string;
  isCompleted: boolean;
  task: string;
};

type ToDoItemsContextProps = {
  toDoItems: ToDoItem[];
  filteredToDoItems: ToDoItem[];
  currentFilter: FilterType;
  activeItemsCount: number;
  doneItemsCount: number;
  setCurrentFilter: Dispatch<SetStateAction<FilterType>>;
  createToDoItem: (toAddItem: ToDoItem) => void;
  updateToDoItem: (toUpdateItem: ToDoItem) => void;
  deleteToDoItem: (toDeleteIDItem: string) => void;
  clearCompleted: () => void;
};

type ToDoItemsProviderProps = {
  children: ReactNode;
};

export const ToDoItemsContext = createContext<ToDoItemsContextProps | undefined>(undefined);

export const ToDoItemsProvider = ({ children }: ToDoItemsProviderProps) => {
  const [toDoItems, setToDoItems] = useState<ToDoItem[]>([]);
  const [filteredToDoItems, setFilteredToDoItems] = useState<ToDoItem[]>([]);
  const [activeItemsCount, setActiveItemsCount] = useState(0);
  const [doneItemsCount, setCompletedItemsCount] = useState(0);
  const [currentFilter, setCurrentFilter] = useState<FilterType>(FilterType.All);

  useEffect(() => {
    setActiveItemsCount(toDoItems.reduce((sum, item) => sum + (!item.isCompleted ? 1 : 0), 0));
    setCompletedItemsCount(toDoItems.reduce((sum, item) => sum + (item.isCompleted ? 1 : 0), 0));

    switch (currentFilter) {
      case FilterType.All:
        setFilteredToDoItems(toDoItems);
        return;
      case FilterType.Active:
        setFilteredToDoItems(toDoItems.filter((item) => !item.isCompleted));
        return;
      case FilterType.Completed:
        setFilteredToDoItems(toDoItems.filter((item) => item.isCompleted));
        return;
    }
  }, [toDoItems, currentFilter]);

  const createToDoItem = (toAddItem: ToDoItem) => {
    setToDoItems((prevToDoItems) => [...prevToDoItems, toAddItem]);
  };

  const updateToDoItem = (toUpdateItem: ToDoItem) => {
    const indexToUpdate = toDoItems.findIndex((item) => item.id === toUpdateItem.id);

    if (indexToUpdate !== -1) {
      setToDoItems((prevToDoItems) => {
        const updatedItems = [...prevToDoItems];
        updatedItems[indexToUpdate] = toUpdateItem;
        return updatedItems;
      });
    } else {
      throw new Error(`Object with ID ${toUpdateItem.id} not found.`);
    }
  };

  const deleteToDoItem = (toDeleteIDItem: string) => {
    const indexToDelete = toDoItems.findIndex((item) => item.id === toDeleteIDItem);

    if (indexToDelete !== -1) {
      setToDoItems((prevToDoItems) => prevToDoItems.filter((item) => item.id !== toDeleteIDItem));
    } else {
      throw new Error(`Object with ID ${toDeleteIDItem} not found.`);
    }
  };

  const clearCompleted = () => {
    setToDoItems(toDoItems.filter((item) => !item.isCompleted));
  };

  const contextValue = {
    toDoItems,
    filteredToDoItems,
    currentFilter,
    activeItemsCount,
    doneItemsCount,
    setCurrentFilter,
    createToDoItem,
    updateToDoItem,
    deleteToDoItem,
    clearCompleted,
  };

  return <ToDoItemsContext.Provider value={contextValue}>{children}</ToDoItemsContext.Provider>;
};
