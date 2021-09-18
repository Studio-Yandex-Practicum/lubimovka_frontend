import { FC } from 'react';
import cn from 'classnames';

import styles from './Tab.module.css';

interface ITabProps {
  name: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: 's' | 'l';
  value?: string | number;
  labelText?: string | number;
  onChange?: () => void;
}

export const Tab: FC<ITabProps> = (props) => {
  const {
    name = 'test',
    checked = false,
    defaultChecked = false,
    disabled = false,
    size = 's',
    value = 'test-tab',
    labelText = 'test-tab',
    ...restTabProps
  } = props;

  return (
    <label className={cn(styles.label)}>
      <input className={cn(styles.input)}
        name= {name}
        value={value}
        checked={checked}
        disabled={disabled}
        defaultChecked={defaultChecked}
        type="radio"
        {...restTabProps}
      />
      <span className={cn(styles.span, styles[size])}>{labelText}</span>
    </label>

  );
};
