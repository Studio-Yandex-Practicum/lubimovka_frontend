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
  deleteItem: (value: string) => void,
  addSelectItems: (valueList: string[]) => void,
}

interface IDroplistProps {
  cb: (selectList: string[] | string) => void
  type?: 'checkbox' | 'radio'
  data?: string[] | number[]
  defaultListType?: 'years' | 'months'
  defaultValue?: string
  ref?: React.ForwardedRef<IDroplistPublic>
  className?: 'string'
}

// eslint-disable-next-line react/display-name
export const Droplist: FC<IDroplistProps> = forwardRef((props: IDroplistProps, ref) => {
  const {
    type = 'checkbox',
    data,
    cb,
    defaultListType,
    className,
    defaultValue
  } = props;

  // Выбранный список пользователем.
  const [ selectList, setSelectList ] = useState<string[]>([]);

  // Список для вывода
  const [ list, setList ] = useState<string[] | number[]>([]);
  // Выбран ли Dropdown
  const [ activeDropdown, setActiveDropdown ] = useState(false);

  useEffect(() => {
    // Передача своего объекта
    if (Array.isArray(data)) {
      setList(data);
      return;
    }
    // utils функция createList формирует массивы зависящие от передаваемого типа списка.
    const list = createList(defaultListType);
    setList(list);
  }, [ data ]);

  useEffect(() => {
    // Если тип 'radio' в выводимый список добавиться первый элемент переданного списка
    if (type === 'radio' && !defaultValue && list.length) {
      setSelectList([String(list[0]).toLowerCase()]);
    }
  }, [type, list]);

  useEffect(() => {
    if (defaultValue) {
      setSelectList([defaultValue]);
    }
  }, []);

  const deleteItemInSelectList = (value: string) => {
    return setSelectList(state => [...state.filter((item) => item !== value.toLowerCase())]);
  };

  useImperativeHandle(ref, () => ({
    deleteAll: () => { setSelectList([]); },
    deleteItem: (value: string) => { deleteItemInSelectList(value); },
    addSelectItems: (valueList: string[]) => { setSelectList(valueList); },
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
    if (type === 'radio') {
      setSelectList([value]);
      // При клике отрабатывает колбэк
      cb(value);
      return;
    }
    if (activeCheckbox) {
      setSelectList(state => {
        const newState = state.slice(0);
        newState.push(value.toLowerCase());
        return newState;
      });
      return;
    }
    deleteItemInSelectList(value);
  }, [ selectList ]);

  const droplistClass = className ? className : styles.droplistWidth;

  return (
    <div className={ cn(styles.droplist, droplistClass) }>
      <ContainerButton
        cb={ cbContainer } 
        activeDropdown={ activeDropdown }
        value={ type === 'radio' ? selectList[0] : 'Все' }
      />
      <form
        name='droplist'
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
              activeCheckbox={selectList.some(itemSelect => itemSelect.toLocaleLowerCase() === String(item).toLocaleLowerCase())}
            />
          ))}
        </div>
        { selectList.length > 0 && type !== 'radio'
          && <ListSelected selectList={ selectList } /> }
      </form>
    </div>
  );
});
