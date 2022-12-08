import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './select.module.css';

export type SelectOption<ValueType = string | number> = {
  text: string
  value: ValueType
}

export type SelectOptionCheckHandler<ValueType = string | number> = (option: SelectOption<ValueType | null>) => void

interface SelectProps<T> {
  clearable?: boolean,
  placeholder: string,
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
  const [opened, setOpened] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    clearable = false,
    placeholder,
    options,
    selectedOption,
    onChange,
  } = props;

  const handleOptionCheck = (option: SelectOption<ValueType | null>) => () => {
    if (onChange) {
      onChange(option);
    }
    closeDropdown();
  };

  const toggleDropdown = () => {
    setOpened((opened) => !opened);
  };

  const closeDropdown = () => {
    setOpened(false);
  };

  const handleClickOutside = (event: MouseEvent | KeyboardEvent) => {
    if (containerRef.current && containerRef.current.contains(event.target as Node)) {
      return;
    }
    closeDropdown();
  };

  useEffect(() => {
    (['click', 'keyup'] as const).forEach((event) => {
      window.addEventListener(event, handleClickOutside, true);
    });

    return () => {
      (['click', 'keyup'] as const).forEach((event) => {
        window.removeEventListener(event, handleClickOutside, true);
      });
    };
  }, []);

  return (
    <div
      className={cx(opened ? 'opened' : 'closed')}
      ref={containerRef}
    >
      <button
        className={cx('handle')}
        onClick={toggleDropdown}
      >
        {selectedOption?.text || placeholder}
      </button>
      <ul className={cx('dropdown')}>
        {clearable && selectedOption && (
          <li
            className={cx('option-regular')}
            onMouseDown={handleOptionCheck(emptyOption)}
          >
            {emptyOption.text}
          </li>
        )}
        {options.map((option, index) => (
          <li
            key={index}
            className={cx(option === selectedOption ? 'option-selected' : 'option-regular')}
            onMouseDown={handleOptionCheck(option)}
          >
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
