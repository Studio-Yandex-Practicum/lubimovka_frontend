import classNames from 'classnames/bind';
import { useCallback, useState } from 'react';

import { Dropdown } from 'components/ui/dropdown';
import { Icon } from 'components/ui/icon';

import styles from './select.module.css';

export type SelectOption<ValueType = string | number> = {
  text: string
  value: ValueType
};

export type SelectOptionCheckHandler<ValueType = string | number> = (
  option: SelectOption<ValueType>
) => void;

interface SelectProps<T> {
  colors?: 'default' | 'brand'
  placeholder: string
  options: SelectOption<T>[]
  selectedOption?: SelectOption<T>
  onChange: SelectOptionCheckHandler<T>
  disabled: boolean
}

const cx = classNames.bind(styles);

export const Select = <ValueType,>(props: SelectProps<ValueType>) => {
  const {
    colors = 'default',
    placeholder,
    options,
    selectedOption,
    onChange,
    disabled,
  } = props;

  const [opened, setOpened] = useState(false);

  const handleOptionCheck = (option: SelectOption<ValueType>) => () => {
    if (!disabled && onChange) {
      onChange(option);
      setOpened(false);
    }
  };

  const handleDropdownOpen = useCallback(() => {
    if (!disabled) {
      setOpened(true);
    }
  }, [disabled]);

  const handleDropdownClose = useCallback(() => {
    setOpened(false);
  }, []);

  return (
    <Dropdown
      className={cx([colors])}
      opened={opened}
      buttonProps={{
        icon: <Icon glyph='arrow-down' width='100%' height='100%'/>,
        iconPosition: 'right',
        border: 'right-bottom-left',
        children: selectedOption?.text || placeholder,
        disabled,
      }}
      popupProps={{
        className: cx('popup'),
      }}
      onOpen={handleDropdownOpen}
      onClose={handleDropdownClose}
    >
      <ul className={cx('list')}>
        {options.map((option) => (
          <li
            key={`${option.value}`}
            className={cx(
              option === selectedOption ? 'option-selected' : 'option-regular'
            )}
            onMouseDown={handleOptionCheck(option)}
          >
            {option.text}
          </li>
        ))}
      </ul>
    </Dropdown>
  );
};
