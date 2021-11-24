import React, { useCallback, FC } from 'react';
import cn from 'classnames';

import { Icon } from 'components/ui/icon';

import styles from './droplist-items.module.css';

interface IDroplistItemsProps {
  type: 'checkbox' | 'radio'
  item: string | number,
  cb: (value: string, activeCheckbox: boolean) => void,
  activeCheckbox: boolean
}

export const DroplistItems: FC<IDroplistItemsProps> = ({ item, cb, activeCheckbox, type }): JSX.Element => {

  const handlerCheckbox = useCallback(() => {
    cb(String(item), !activeCheckbox);
  }, [activeCheckbox, cb, item]);

  return (
    <div className={cn(styles.item, {
      [styles.itemCheckbox]: type === 'checkbox' 
    })} onClick={handlerCheckbox}>
      {activeCheckbox && type === 'radio' && <span className={ cn(styles.circle) } /> }
      {type === 'checkbox' && 
        <div className={cn(styles.checkbox)}>
          {activeCheckbox && <Icon glyph='ok'/>}
        </div>}
      {item}
    </div>
  );
};
