import { Filter as Component } from './filter';
import { FilterField } from './filter-field';
import { FilterList } from './filter-list';
import { FilterActions } from './filter-actions';

export const Filter = Object.assign(Component, {
  Field: FilterField,
  List: FilterList,
  Actions: FilterActions,
});
