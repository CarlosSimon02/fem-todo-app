import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';

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
  setCurrentFilter: Dispatch<SetStateAction<FilterType>>;
  createToDoItem: (toAddItem: ToDoItem) => void;
  updateToDoItem: (toUpdateItem: ToDoItem) => void;
  deleteToDoItem: (toDeleteIDItem: number) => void;
};

export const ToDoItemsContext = createContext<ToDoItemsContextProps | undefined>(undefined);

export const ToDoItemsProvider = () => {
  const [toDoItems, setToDoItems] = useState<ToDoItem[]>([]);
  const [filteredToDoItems, setFilteredToDoItems] = useState<ToDoItem[]>([]);
  const [currentFilter, setCurrentFilter] = useState<FilterType>(FilterType.All);

  useEffect(() => {
    switch (currentFilter) {
      case FilterType.All:
        setFilteredToDoItems(toDoItems);
        return;
      case FilterType.Active:
        setFilteredToDoItems(toDoItems.filter((item) => !item.isDone));
        return;
      case FilterType.Done:
        setFilteredToDoItems(toDoItems.filter((item) => item.isDone));
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
        prevToDoItems[indexToUpdate] = toUpdateItem;
        return prevToDoItems;
      });
    } else {
      throw new Error(`Object with ID ${toUpdateItem.id} not found.`);
    }
  };

  const deleteToDoItem = (toDeleteIDItem: number) => {
    const indexToDelete = toDoItems.findIndex((item) => item.id === toDeleteIDItem);

    if (indexToDelete !== -1) {
      setToDoItems(toDoItems.filter((item) => item.id !== toDeleteIDItem));
    } else {
      throw new Error(`Object with ID ${toDeleteIDItem} not found.`);
    }
  };

  const contextValue = {
    toDoItems,
    filteredToDoItems,
    currentFilter,
    setCurrentFilter,
    createToDoItem,
    updateToDoItem,
    deleteToDoItem,
  };

  return <ToDoItemsContext.Provider value={contextValue}></ToDoItemsContext.Provider>;
};
