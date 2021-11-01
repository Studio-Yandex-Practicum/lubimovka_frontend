import React, { useState, useCallback, FC, useEffect } from 'react';
import cn from 'classnames';

import styles from './droplist-items.module.css';

interface IDroplistItemsProps {
  month: string | number,
  selectList: string[],
  cb: (value: string, activeCheckbox: boolean) => void,
}

export const DroplistItems: FC<IDroplistItemsProps> = ({ month, cb, selectList }): JSX.Element => {
  const [ activeCheckbox, setActiveCheckbox ] = useState(false);

  const hendlerCheckbox = useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    // Январь, 2021
    const value: string = event.currentTarget.value;

    setActiveCheckbox(state => !state);
    cb(value, !activeCheckbox);
  }, [ activeCheckbox ]);

  useEffect(() => {
    if (selectList.length === 0 && activeCheckbox === true) {
      setActiveCheckbox(false);
    }
  }, [selectList]);

  return (
    <label className={ cn(styles.item, {
      [styles.active]: activeCheckbox,
    })}>
      { activeCheckbox && <span className={ cn(styles.circle) } /> }
      { month }
      <input
        type="checkbox"
        value={ month }
        className={ cn(styles.checkbox) }
        onClick={ hendlerCheckbox }
      />
    </label>
  );
};
