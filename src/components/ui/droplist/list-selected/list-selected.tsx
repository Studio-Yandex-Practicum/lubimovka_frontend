import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Tag } from 'components/ui/tag';

import styles from './list-selected.module.css';

const cx = classNames.bind(styles);

interface IListSelectedProps {
  selectList: string[] | string
  activeDropdown: boolean
  handlerDeleteItem: (item: string) => void
}

export const ListSelected: FC<IListSelectedProps> = ({ selectList, activeDropdown, handlerDeleteItem }): JSX.Element => (
  <div className={cx('container', { 'lower': activeDropdown })}>
    <ul className={cx('list')}>
      {Array.isArray(selectList) && selectList.map((item, i) => (
        <Tag 
          label={`${item[0]}${item.slice(1).toLowerCase()}`} 
          key={i} 
          selected={true} 
          isIcon={true} 
          cb={handlerDeleteItem}
        />
      ))}
    </ul>
  </div>
);
