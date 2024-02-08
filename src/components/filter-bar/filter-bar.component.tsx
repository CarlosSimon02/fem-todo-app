import { ChangeEvent } from 'react';

import { FilterType } from '../../contexts/to-do-items.context';
import useToDoItems from '../../hooks/useToDoItems.hook';
import { StyledFieldSet, StyledLabel } from './filter-bar.styles';

const FilterBar = () => {
  const { currentFilter, setCurrentFilter } = useToDoItems();

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCurrentFilter(event.target.value as FilterType);
    }
  };

  return (
    <StyledFieldSet>
      <legend className="sr-only">Choose a filter</legend>
      <StyledLabel>
        <input
          className="sr-only"
          type="radio"
          name="filter"
          value={FilterType.All}
          checked={FilterType.All === currentFilter}
          onChange={inputChangeHandler}
        />
        <p>All</p>
      </StyledLabel>
      <StyledLabel>
        <input
          className="sr-only"
          type="radio"
          name="filter"
          value={FilterType.Active}
          checked={FilterType.Active === currentFilter}
          onChange={inputChangeHandler}
        />
        <p>Active</p>
      </StyledLabel>
      <StyledLabel>
        <input
          className="sr-only"
          type="radio"
          name="filter"
          value={FilterType.Completed}
          checked={FilterType.Completed === currentFilter}
          onChange={inputChangeHandler}
        />
        <p>Completed</p>
      </StyledLabel>
    </StyledFieldSet>
  );
};

export default FilterBar;
