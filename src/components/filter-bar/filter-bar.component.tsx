import { MouseEvent } from 'react';

import { FilterType } from '../../contexts/to-do-items.context';
import useToDoItems from '../../hooks/useToDoItems.hook';
import useWindow from '../../hooks/useWindow.hook';
import { BREAKPOINTS } from '../../styles/constants/breakpoints';
import { StyledButton, StyledFieldSet } from './filter-bar.styles';

const FilterBar = () => {
  const { innerWidth } = useWindow();
  const { currentFilter, setAndStoreCurrentFilter } = useToDoItems();

  const clickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    setAndStoreCurrentFilter(event.currentTarget.dataset.filter as FilterType);
  };

  return (
    <StyledFieldSet className={innerWidth < BREAKPOINTS.UP.TABLET ? 'isolated' : 'integrated'}>
      <legend className="sr-only">Choose a filter</legend>
      <StyledButton
        className={currentFilter === FilterType.All ? 'current-filter' : ''}
        data-filter="all"
        onClick={clickHandler}
      >
        All
      </StyledButton>
      <StyledButton
        className={currentFilter === FilterType.Active ? 'current-filter' : ''}
        data-filter="active"
        onClick={clickHandler}
      >
        Active
      </StyledButton>
      <StyledButton
        className={currentFilter === FilterType.Completed ? 'current-filter' : ''}
        data-filter="completed"
        onClick={clickHandler}
      >
        Completed
      </StyledButton>
    </StyledFieldSet>
  );
};

export default FilterBar;
