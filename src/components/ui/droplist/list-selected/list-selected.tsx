import { FC } from 'react';
import classNames from 'classnames/bind';

import { DroplistOption } from 'components/ui/droplist';
import { Tag } from 'components/ui/tag';

import styles from './list-selected.module.css';

const cx = classNames.bind(styles);

interface IListSelectedProps {
  selectList: DroplistOption[]
  activeDropdown: boolean
  handlerDeleteItem: (item: string, counter: number | undefined) => void
}

export const ListSelected: FC<IListSelectedProps> = ({ selectList, activeDropdown, handlerDeleteItem }): JSX.Element => (
  <div className={cx('container', { 'lower': activeDropdown })}>
    <ul className={cx('list')}>
      {Array.isArray(selectList) && selectList.map((item, i) => (
        <Tag 
          label={`${item.text[0]}${item.text.slice(1).toLowerCase()}`} 
          key={i} 
          selected={true} 
          isIcon={true}
          counter={item.value}
          cb={handlerDeleteItem}
        />
      ))}
    </ul>
  </div>
);
