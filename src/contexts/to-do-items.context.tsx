import { ReactNode, createContext, useEffect, useState } from 'react';

import { v4 } from 'uuid';

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
  setAndStoreToDoItems: (toDoItems: ToDoItem[]) => void;
  setAndStoreCurrentFilter: (currentFilter: FilterType) => void;
  createToDoItem: (toAddItem: ToDoItem) => void;
  updateToDoItem: (toUpdateItem: ToDoItem) => void;
  deleteToDoItem: (toDeleteIDItem: string) => void;
  clearCompleted: () => void;
};

type ToDoItemsProviderProps = {
  children: ReactNode;
};

const TO_DO_ITEMS_DATA = 'to-do-items';
const CURRENT_FILTER_DATA = 'current-filter';

const getInitialCurrentFilter = (): FilterType => {
  const currentFilterJSON = localStorage.getItem(CURRENT_FILTER_DATA);

  return currentFilterJSON ? (JSON.parse(currentFilterJSON) as FilterType) : FilterType.All;
};

const getInitialToDoItems = (): ToDoItem[] => {
  const toDoItemsJSON = localStorage.getItem(TO_DO_ITEMS_DATA);

  if (toDoItemsJSON) {
    return JSON.parse(toDoItemsJSON);
  }

  const defaultToDoItems: ToDoItem[] = [
    {
      id: v4(),
      isCompleted: true,
      task: 'Complete online Javascript course',
    },
    {
      id: v4(),
      isCompleted: false,
      task: 'Jog around the park 3x',
    },
    {
      id: v4(),
      isCompleted: false,
      task: '10 minutes meditation',
    },
    {
      id: v4(),
      isCompleted: false,
      task: 'Read for 1 hour',
    },
    {
      id: v4(),
      isCompleted: false,
      task: 'Pick up groceries',
    },
    {
      id: v4(),
      isCompleted: false,
      task: 'Complete Todo App on Frontend Mentor',
    },
  ];
  localStorage.setItem(TO_DO_ITEMS_DATA, JSON.stringify(defaultToDoItems));
  return defaultToDoItems;
};

export const ToDoItemsContext = createContext<ToDoItemsContextProps | undefined>(undefined);

export const ToDoItemsProvider = ({ children }: ToDoItemsProviderProps) => {
  const [toDoItems, setToDoItems] = useState(getInitialToDoItems());
  const [filteredToDoItems, setFilteredToDoItems] = useState<ToDoItem[]>([]);
  const [activeItemsCount, setActiveItemsCount] = useState(0);
  const [doneItemsCount, setCompletedItemsCount] = useState(0);
  const [currentFilter, setCurrentFilter] = useState(getInitialCurrentFilter());

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

  const setAndStoreToDoItems = (toDoItems: ToDoItem[]) => {
    setToDoItems(toDoItems);
    localStorage.setItem(TO_DO_ITEMS_DATA, JSON.stringify(toDoItems));
  };

  const setAndStoreCurrentFilter = (currentFilter: FilterType) => {
    setCurrentFilter(currentFilter);
    localStorage.setItem(CURRENT_FILTER_DATA, JSON.stringify(currentFilter));
  };

  const createToDoItem = (toAddItem: ToDoItem) => {
    setAndStoreToDoItems([...toDoItems, toAddItem]);
  };

  const updateToDoItem = (toUpdateItem: ToDoItem) => {
    const indexToUpdate = toDoItems.findIndex((item) => item.id === toUpdateItem.id);

    if (indexToUpdate !== -1) {
      const updatedToDoItems = [...toDoItems];
      updatedToDoItems[indexToUpdate] = toUpdateItem;
      setAndStoreToDoItems(updatedToDoItems);
    } else {
      throw new Error(`Object with ID ${toUpdateItem.id} not found.`);
    }
  };

  const deleteToDoItem = (toDeleteIDItem: string) => {
    const indexToDelete = toDoItems.findIndex((item) => item.id === toDeleteIDItem);

    if (indexToDelete !== -1) {
      setAndStoreToDoItems(toDoItems.filter((item) => item.id !== toDeleteIDItem));
    } else {
      throw new Error(`Object with ID ${toDeleteIDItem} not found.`);
    }
  };

  const clearCompleted = () => {
    setAndStoreToDoItems(toDoItems.filter((item) => !item.isCompleted));
  };

  const contextValue = {
    toDoItems,
    filteredToDoItems,
    currentFilter,
    activeItemsCount,
    doneItemsCount,
    setAndStoreToDoItems,
    setAndStoreCurrentFilter,
    createToDoItem,
    updateToDoItem,
    deleteToDoItem,
    clearCompleted,
  };

  return <ToDoItemsContext.Provider value={contextValue}>{children}</ToDoItemsContext.Provider>;
};
