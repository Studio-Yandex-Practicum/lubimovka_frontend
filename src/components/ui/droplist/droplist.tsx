import React, { FC, useEffect, useState, useCallback, useRef, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import { List } from './list';
import { ListSelected } from './list-selected';
import { ContainerButton } from './container-button';

import styles from './droplist.module.css';

const cx = classNames.bind(styles);

interface IDroplistProps extends HTMLAttributes<HTMLDivElement> {
  type: 'single' | 'multiple'
  list: string[]
  selectList: string[] | string
  onAdd: (element: string) => void
  onDelete: (element: string) => void
  defaultValue?: string
}

export const Droplist: FC<IDroplistProps> = (props): JSX.Element => {
  const {
    type,
    list,
    selectList,
    onAdd,
    onDelete,
    className,
    defaultValue
  } = props;

  const [ activeDropdown, setActiveDropdown ] = useState(false);

  const droplistRef = useRef<HTMLDivElement>(null);

  const closeDroplist = (e: MouseEvent) => {
    const droplist = droplistRef.current;
    if(e?.target instanceof Node && droplist) {
      !droplist.contains(e.target) && setActiveDropdown(false);
    }
  };

  useEffect(() => {
    if (activeDropdown) {
      document.addEventListener('mouseup', closeDroplist);
      return;
    }
    document.removeEventListener('mouseup', closeDroplist);
  }, [activeDropdown]);

  const cbContainer = useCallback(() => {
    setActiveDropdown(state => !state);
  }, []);

  const handlerDeleteItem = (item: string) => {
    onDelete(item);
  };

  const handlerClick = (findItem: string | boolean | undefined, item: string) => {
    if (type === 'single' && !findItem) {
      onAdd(item);
      setTimeout(() => setActiveDropdown(false), 200);
      return;
    }
    if (type === 'multiple') {
      findItem ? onDelete(item) : onAdd(item);
    }
  };

  const droplistClass = className ? className : 'droplistWidth';

  return (
    <div className={cx('droplist', droplistClass)} ref={droplistRef}>
      <ContainerButton
        cb={cbContainer}
        activeDropdown={activeDropdown}
        value={type === 'single' && !Array.isArray(selectList) && selectList || defaultValue || 'Все'}
      />
      <form
        name="droplist"
        className={cx('form')}
      >
        <ul className={cx('list', {
          'active': activeDropdown,
        })}>
          {list.map((item, i) =>
            <List 
              key={i} 
              type={type} 
              selectList={selectList} 
              item={item} 
              handlerClick={handlerClick}
            />)}
        </ul>
        {selectList.length > 0 && type === 'multiple' && 
          <ListSelected 
            selectList={selectList} 
            activeDropdown={activeDropdown} 
            handlerDeleteItem={handlerDeleteItem}
          />}
      </form>
    </div>
  );
};
