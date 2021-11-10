import React, { FC, useEffect, useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import cn from 'classnames';

// Компоненты
import { DroplistItems } from './droplist-items';
import { ListSelected } from './list-selected';
import { ContainerButton } from './container-button';

import styles from './droplist.module.css';

// utile
import { createList } from './utils';

export interface IDroplistPublic {
  deleteAll: () => void,
  deleteItem: (value: string) => void
}

interface IDroplistProps {
  type: 'years' | 'months';
  cb: (selectList: string[]) => void,
  data?: string[] | number[], // Это свойство можно убрать, оно сильно усложняет, через хук отдать функцию,
  // которой можно установить список. Можно даже отдать getList(кстати почему не setList?), тогда можно управлять списком 
  // внутри и снаружи. Мне кажется это упростит задачу.
  maxWidth?: number,
  widthSelectedItem?: number,
  ref: React.ForwardedRef<IDroplistPublic>
}

// eslint-disable-next-line react/display-name
export const Droplist: FC<IDroplistProps> = forwardRef((props: IDroplistProps, ref) => {
  const {
    type, 
    cb,
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


  // const deleteAll = () => {
  //   console.log('deleteAll');
  //   setSelectList([]);
  // };

  // const deleteItem = (value: string) => {
  //   setSelectList(state => {
  //     const previousState = state.slice(0);
  //     const newState = previousState.filter((item: string | number) => item !== value.toLowerCase());
  //     return newState;
  //   });
  // };

  useImperativeHandle(ref, () => ({
    deleteAll: () => { setSelectList([]); },
    deleteItem: (value: string) => { setSelectList(state => [...state.filter((item) => item !== value.toLowerCase())]); }
  }), [ selectList ]);

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
          { list.map((item: string | number, i): JSX.Element => (
            <DroplistItems
              item={ item }
              key={ i }
              cb={ cbItems }
              selectList={ selectList }
              activeCheckbox={selectList.some(itemSelect => itemSelect === item)}
            />
          ))}
        </div>
        { selectList.length > 0
          && <ListSelected selectList={ selectList } setMaxWidth={ setMaxWidth } /> }
      </form>
    </div>
  );
});
