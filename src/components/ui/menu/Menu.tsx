import React from 'react';
import { FC } from 'react';
import { Tab } from '../tab/Tab';
import cn from 'classnames';

import styles from './Menu.module.css';


interface IMenuProps {
  name: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: 's' | 'l';
  value?: string;
  labelText?: string;
  onChange?: () => void;
}

export const Menu: FC<IMenuProps> = (props) => {
  const {
    name = 'menu',
    size = 's',
    ...restMenuProps
  } = props;

  return (
    <div className={cn(styles.menu, styles[size])}>
      <Tab
        name = {name}
        labelText = 'first'
        disabled = {true}
        size = {size}
        {...restMenuProps}
      />
      <Tab
        name = {name}
        labelText = 'second'
        size = {size}
        {...restMenuProps}
      />
      <Tab
        name = {name}
        labelText = 'third'
        size = {size}
        {...restMenuProps}
      />
      <Tab
        name = {name}
        labelText = 'fourth'
        size = {size}
        {...restMenuProps}
      />
    </div>
    // <label className={cn(styles.label)}>
    //   <input className={cn(styles.input)}
    //     name="test"
    //     value={value}
    //     checked={checked}
    //     disabled={disabled}
    //     defaultChecked={defaultChecked}
    //     type="radio"
    //     {...restMenuProps}
    //   />
    //   <span className={cn(styles.span, styles[size])}>{labelText}</span>
    // </label>

  );
};
