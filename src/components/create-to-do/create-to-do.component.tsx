import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';

import { v4 } from 'uuid';

import useToDoItems from '../../hooks/useToDoItems.hook';
import Checkbox from '../checkbox/checkbox.component';
import { StyledCreateToDoContainer, StyledCreateToDoInput } from './create-to-do.styles';

const CreateToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { createToDoItem } = useToDoItems();

  // handle checkbox click event
  const toggleCheckHandler = () => setIsChecked((prev) => !prev);

  // Get the value from the input element
  const inputValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Add item when "Enter" key is pressed
  const inputKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (inputValue) {
      switch (event.key) {
        case 'Enter':
          createToDoItem({ id: v4(), isCompleted: isChecked, task: inputValue });

          // Clear the input value
          if (inputRef.current) {
            inputRef.current.value = '';
            setInputValue('');
          }
          break;
      }
    }
  };

  return (
    <StyledCreateToDoContainer>
      <StyledCreateToDoInput
        ref={inputRef}
        type="text"
        placeholder="Create new to-do..."
        onChange={inputValueChangeHandler}
        onKeyDown={inputKeyDownHandler}
      />
      <Checkbox checked={isChecked} onClick={toggleCheckHandler} />
    </StyledCreateToDoContainer>
  );
};

export default CreateToDo;
