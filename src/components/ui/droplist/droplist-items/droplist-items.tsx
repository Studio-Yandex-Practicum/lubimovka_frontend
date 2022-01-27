import { FC } from 'react';
import classNames from 'classnames/bind';

import { DroplistOption } from 'components/ui/droplist';
import { Icon } from 'components/ui/icon';

import styles from './droplist-items.module.css';

const cx = classNames.bind(styles);

interface IDroplistItemsProps {
  type: 'single' | 'multiple'
  selectList: DroplistOption[]
  value: string
  handlerClick: (item: string, counter: number) => void
  counter: number
}

export const DroplistItems: FC<IDroplistItemsProps> = ({ type, selectList, value, handlerClick, counter }): JSX.Element => {
  const findItem = selectList.find(item => item.value === counter);

  return (
    <li className={cx('item', { 'itemCheckbox': type === 'multiple' })}
      onClick={() => handlerClick(value, counter)}
    >
      {findItem && type === 'single' && <span className={cx('circle')}/>}
      {type === 'multiple' && 
      <div className={cx('checkbox')}>
        {findItem && <Icon glyph="ok" className={cx('icon')}/>}
      </div>}
      <p className={cx('text')}>
        {value}
      </p>
    </li>
  );
};
