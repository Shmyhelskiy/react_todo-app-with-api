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
        className={classNames(`filter__link`, {
          selected: selectFilter === FilterNav.All,
        })}
        data-cy="FilterLinkAll"
        onClick={() => handleFilter(FilterNav.All)}
      >
        All
      </a>

      <a
        href="#/active"
        className={classNames(`filter__link`, {
          selected: selectFilter === FilterNav.Active,
        })}
        data-cy="FilterLinkActive"
        onClick={() => handleFilter(FilterNav.Active)}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={classNames(`filter__link`, {
          selected: selectFilter === FilterNav.Completed,
        })}
        data-cy="FilterLinkCompleted"
        onClick={() => handleFilter(FilterNav.Completed)}
      >
        Completed
      </a>
    </nav>
  );
};
