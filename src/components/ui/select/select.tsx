import classNames from 'classnames/bind';
import { useCallback,useState } from 'react';

import { Dropdown } from 'components/ui/dropdown';
import { Icon } from 'components/ui/icon';

import styles from './select.module.css';

export type SelectOption<ValueType = string | number> = {
  text: string
  value: ValueType
}

export type SelectOptionCheckHandler<ValueType = string | number> = (option: SelectOption<ValueType | null>) => void

interface SelectProps<T> {
  colors?: 'default' | 'brand'
  clearable?: boolean
  placeholder: string
  options: SelectOption<T>[]
  selectedOption?: SelectOption<T>
  onChange: SelectOptionCheckHandler<T>
}

const cx = classNames.bind(styles);

const emptyOption = {
  text: '-',
  value: null,
};

export const Select = <ValueType,>(props: SelectProps<ValueType>) => {
  const {
    colors = 'default',
    clearable = false,
    placeholder,
    options,
    selectedOption,
    onChange,
  } = props;

  const [opened, setOpened] = useState(false);

  const handleOptionCheck = (option: SelectOption<ValueType | null>) => () => {
    if (onChange) {
      onChange(option);
    }
    setOpened(false);
  };

  const handleDropdownOpen = useCallback(() => {
    setOpened(true);
  }, []);

  const handleDropdownClose = useCallback(() => {
    setOpened(false);
  }, []);

  return (
    <Dropdown
      className={cx([colors])}
      opened={opened}
      buttonProps={{
        icon: (
          <Icon
            glyph="arrow-down"
            width="100%"
            height="100%"
          />
        ),
        iconPosition: 'right',
        border: 'right-bottom-left',
        children: selectedOption?.text || placeholder,
      }}
      popupProps={{
        className: cx('popup'),
      }}
      onOpen={handleDropdownOpen}
      onClose={handleDropdownClose}
    >
      <ul className={cx('list')}>
        {clearable && selectedOption && (
          <li
            className={cx('option-regular')}
            onMouseDown={handleOptionCheck(emptyOption)}
          >
            {emptyOption.text}
          </li>
        )}
        {options.map((option) => (
          <li
            key={`${option.value}`}
            className={cx(option === selectedOption ? 'option-selected' : 'option-regular')}
            onMouseDown={handleOptionCheck(option)}
          >
            {option.text}
          </li>
        ))}
      </ul>
    </Dropdown>
  );
};
