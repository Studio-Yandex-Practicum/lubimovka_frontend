import React, { useState, useCallback, FC, useEffect } from 'react';
import cn from 'classnames';

import styles from './droplist-items.module.css';

interface IDroplistItemsProps {
  item: string | number,
  activeItem: string | undefined,
  cb: (value: string, activeCheckbox: boolean) => void,
}

export const DroplistItems: FC<IDroplistItemsProps> = ({ item, cb, activeItem }): JSX.Element => {
  const [ activeCheckbox, setActiveCheckbox ] = useState(false);

  const hendlerCheckbox = useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    // Январь, 2021
    const value: string = event.currentTarget.value;

    setActiveCheckbox(state => !state);
    cb(value, !activeCheckbox);
  }, [ activeCheckbox ]);

  useEffect(() => {
    if (activeItem) {
      setActiveCheckbox(true);
      cb(activeItem, !activeCheckbox);
    }
  }, []);

  return (
    <label className={ cn(styles.item, {
      [styles.active]: activeCheckbox,
    })}>
      { activeCheckbox && <span className={ cn(styles.circle) } /> }
      { item }
      <input
        type="checkbox"
        value={ item }
        className={ cn(styles.checkbox) }
        onClick={ hendlerCheckbox }
      />
    </label>
  );
};
