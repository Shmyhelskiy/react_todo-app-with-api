import classNames from 'classnames';
import { FilterNav } from '../../types/Filter';

type Props = {
  handleFilter: (filterName: FilterNav) => void;
  selectFilter: FilterNav;
};

export const TodoNav: React.FC<Props> = ({ handleFilter, selectFilter }) => {
  return (
    <nav className="filter" data-cy="Filter">
      <a
        href="#/"
        className={`filter__link ${selectFilter === 'all' ? 'selected' : ''}`}
        data-cy="FilterLinkAll"
        onClick={() => handleFilter(FilterNav.All)}
      >
        All
      </a>

      <a
        href="#/active"
        className={`filter__link ${selectFilter === 'active' ? 'selected' : ''}`}
        data-cy="FilterLinkActive"
        onClick={() => handleFilter(FilterNav.Active)}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={`filter__link ${selectFilter === 'completed' ? 'selected' : ''}`}
        data-cy="FilterLinkCompleted"
        onClick={() => handleFilter(FilterNav.Completed)}
      >
        Completed
      </a>
    </nav>
  );
};
