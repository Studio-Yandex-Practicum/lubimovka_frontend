import { FC, useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './select.module.css';

export type SelectOption = {
  text: string
  value: string | number
}

interface SelectProps {
  placeholder: string,
  options: SelectOption[]
  selectedOption?: SelectOption
  onChange: (option: SelectOption) => void
}

const cx = classNames.bind(styles);

export const Select: FC<SelectProps> = (props) => {
  const [opened, setOpened] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    placeholder,
    options,
    selectedOption,
    onChange,
  } = props;

  const handleOptionCheck = (option: SelectOption) => () => {
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
        {options.map((option) => (
          <li
            key={option.value}
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
