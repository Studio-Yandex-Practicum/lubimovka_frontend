import React, { useState, SetStateAction, FC } from 'react';
import cn from 'classnames';

import styles from './droplist-items.module.css';

interface IDroplistItemsProps {
  month: string | number,
  setSelectList: React.Dispatch<SetStateAction<string[]>>,
}

export const DroplistItems: FC<IDroplistItemsProps> = ({ month, setSelectList }): JSX.Element => {
  const [ activeCheckbox, setActiveCheckbox ] = useState(false);

  const hendlerCheckbox = (event: React.MouseEvent<HTMLInputElement>) => {
    // Январь, 2021
    const value: string = event.currentTarget.value;

    setActiveCheckbox(!activeCheckbox);

    if (!activeCheckbox) {
      setSelectList((state: string[]) => {
        const newState = state.slice(0);
        newState.push(value);
        return newState;
      });
    } else {
      setSelectList((state: string[]) => {
        const previousState = state.slice(0);
        const newState = previousState.filter((item: string | number) => item !== value);
        return newState;
      });
    }
  };

  return (
    <label className={ cn(styles.item, {
      [styles.active]: activeCheckbox,
    })}>
      {
        activeCheckbox && <span className={ cn(styles.circle) } />
      }
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
