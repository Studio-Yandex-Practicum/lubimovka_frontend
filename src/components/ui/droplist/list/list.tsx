import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import styles from './list.module.css';

const cx = classNames.bind(styles);

interface IDroplistItemsProps {
  type: 'single' | 'multiple'
  selectList: string[] | string
  item: string
  handlerClick: (findItem: string | boolean | undefined, item: string) => void
}

export const List: FC<IDroplistItemsProps> = ({ type, selectList, item, handlerClick }): JSX.Element => {
  const findItem = type === 'multiple' && Array.isArray(selectList) ? selectList.find(el => el === item) : selectList === item;

  return (
    <li className={cx('item', { 'itemCheckbox': type === 'multiple' })}
      onClick={() => handlerClick(findItem, item)}
    >
      {findItem && type === 'single' && <span className={cx('circle')}/>}
      {type === 'multiple' && 
      <div className={cx('checkbox')}>
        {findItem && <Icon glyph="ok" className={cx('icon')}/>}
      </div>}
      <p className={cx('text')}>
        {item}
      </p>
    </li>
  );
};
