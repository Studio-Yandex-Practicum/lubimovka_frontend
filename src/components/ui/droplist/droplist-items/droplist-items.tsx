import React, { useCallback, FC } from 'react';
import cn from 'classnames';

import styles from './droplist-items.module.css';

interface IDroplistItemsProps {
  item: string | number,
  cb: (value: string, activeCheckbox: boolean) => void,
  activeCheckbox: boolean
}

export const DroplistItems: FC<IDroplistItemsProps> = ({ item, cb, activeCheckbox }): JSX.Element => {

  const hendlerCheckbox = useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    // Январь, 2021
    const value: string = event.currentTarget.value;
    cb(value, !activeCheckbox);
  }, [ activeCheckbox ]);

  return (
    <label className={cn(styles.item)}>
      {activeCheckbox && <span className={cn(styles.circle)}/>}
      {item}
      <input
        type="checkbox"
        value={item}
        className={cn(styles.checkbox)}
        onClick={hendlerCheckbox}
      />
    </label>
  );
};
