import React, { FC, useEffect, useState, useCallback } from 'react';
import cn from 'classnames';

// Компоненты
import { DroplistItems } from './droplist-items';
import { ListSelected } from './list-selected';
import { ContainerButton } from './container-button';

import styles from './droplist.module.css';

// utile
import { createList } from './utils';

interface IDroplistProps {
  type: 'years' | 'months';
  cb: (selectList: string[]) => void,
  selectListFromProps?: string[],
  data?: string[] | number[],
  maxWidth?: number,
  widthSelectedItem?: number,
}

export const Droplist: FC<IDroplistProps> = (props): JSX.Element => {
  const {
    type, 
    cb,
    selectListFromProps,
    data, 
    maxWidth, 
    widthSelectedItem
  } = props;

  // Выбранный список пользователем.
  const [ selectList, setSelectList ] = useState<string[]>([]);

  // Список для вывода
  const [ list, getList ] = useState<string[] | number[]>([]);
  // Выбран ли Dropdown
  const [ activeDropdown, setActiveDropdown ] = useState(false);

  useEffect(() => {
    // Если передают свой объект
    if (Array.isArray(data)) {
      getList(data);
      return;
    }
    // utils функция createList формирует массивы зависящий от передаваемого типа списка.
    const list = createList(type);
    if (list) {
      getList(list);
    }
  }, [ data ]);

  useEffect(() => {
    if (selectListFromProps) {
      setSelectList(selectListFromProps);
    }
  }, [selectListFromProps]);

  const handlerSubmit = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    cb(selectList);
    setActiveDropdown(false);
  }, [ selectList, cb, activeDropdown ]);

  const cbContainer = useCallback(() => {
    setActiveDropdown(state => !state);
  }, [ activeDropdown ]);

  const cbItems = useCallback((value: string, activeCheckbox: boolean) => {
    if (activeCheckbox) {
      setSelectList(state => {
        const newState = state.slice(0);
        newState.push(value.toLowerCase());
        return newState;
      });
      return;
    }
    setSelectList(state => {
      const previousState = state.slice(0);
      const newState = previousState.filter((item: string | number) => item !== value.toLowerCase());
      return newState;
    });
  }, [ selectList ]);

  const setMaxWidth = useCallback(() => {
    if (widthSelectedItem) {
      return widthSelectedItem + 'px';
    }
    switch (type) {
    case 'months': return '110px';
    case 'years': return '59px';
    }
  }, [ widthSelectedItem, type ]);

  return (
    <div className={ cn(styles.dropdown) } style={{ maxWidth: maxWidth && maxWidth + 'px' }}>
      <ContainerButton cb={ cbContainer } activeDropdown={ activeDropdown } />
      <form
        name='dropdown'
        className={ cn(styles.form) }
        onSubmit={ handlerSubmit }
      >
        <div className={ cn(styles.list, {
          [styles.active]: activeDropdown,
        })}>
          { list.map((month: string | number, i): JSX.Element => (
            <DroplistItems
              month={ month }
              key={ i }
              cb={ cbItems }
              selectList={ selectList }
            />
          ))}
        </div>
        { activeDropdown && selectList.length > 0
          && <ListSelected selectList={ selectList } setMaxWidth={ setMaxWidth } /> }
      </form>
    </div>
  );
};
