import { Filter as Component } from './filter';
import { FilterActions } from './filter-actions';
import { FilterField } from './filter-field';
import { FilterList } from './filter-list';

export const Filter = Object.assign(Component, {
  Field: FilterField,
  List: FilterList,
  Actions: FilterActions,
});
