import { MultipleSelect as Component } from './multiple-select';
import { MultipleSelectOption } from './multiple-select-option';
import { MultipleSelectOptionText } from './multiple-select-option-text';

export const MultipleSelect = Object.assign(Component, {
  Option: MultipleSelectOption,
  OptionText: MultipleSelectOptionText,
});
