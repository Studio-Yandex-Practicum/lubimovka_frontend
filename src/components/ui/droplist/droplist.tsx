import React, { FC, useEffect, useState, useCallback, useImperativeHandle, forwardRef, useRef } from 'react';
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
  cb: (selectList: string[]) => void
  type?: 'checkbox' | 'radio'
  data?: string[] | number[]
  defaultListType?: 'years' | 'months'
  defaultValue?: string
  ref?: React.ForwardedRef<IDroplistPublic>
  className?: string
}

// eslint-disable-next-line react/display-name
export const Droplist: FC<IDroplistProps> = forwardRef((props: IDroplistProps, ref): JSX.Element => {
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

  const droplistRef = useRef<HTMLDivElement>(null);

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
    if (defaultValue && type === 'radio') {
      setSelectList([defaultValue]);
      return;
    }
    // Если тип 'radio' в выводимый список добавиться первый элемент переданного списка
    if (type === 'radio' && !defaultValue && list.length) {
      setSelectList([String(list[0]).toLowerCase()]);
    }
  }, [type, list]);

  useEffect(() => {
    // При изменении selectList отправляются данные
    cb(selectList);
  }, [selectList]);

  const deleteItemInSelectList = (value: string) => {
    return setSelectList(state => [...state.filter((item) => item !== value.toLowerCase())]);
  };

  const handleClose = (e: MouseEvent) => {
    const droplist = droplistRef.current;
    if (droplist) {
      !droplist.contains(e.target) && setActiveDropdown(false);
    }
  };

  useEffect(() => {
    if (activeDropdown) {
      document.addEventListener('mouseup', handleClose);
      return;
    }
    document.removeEventListener('mouseup', handleClose);
  }, [activeDropdown]);

  useImperativeHandle(ref, () => ({
    deleteAll: () => { setSelectList([]); },
    deleteItem: (value: string) => { deleteItemInSelectList(value); },
    addSelectItems: (valueList: string[]) => { setSelectList(valueList); },
  }), [ selectList ]);

  const cbContainer = useCallback(() => {
    setActiveDropdown(state => !state);
  }, [ activeDropdown ]);

  const cbItems = useCallback((value: string, activeCheckbox: boolean) => {
    if (type === 'radio') {
      setSelectList([value]);
      setTimeout(() => setActiveDropdown(false), 200);
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
  }, [ selectList, type ]);

  const getValue = (value: string) => {
    deleteItemInSelectList(value);
  };

  const droplistClass = className ? className : styles.droplistWidth;

  return (
    <div className={ cn(styles.droplist, droplistClass) } ref={droplistRef}>
      <ContainerButton
        cb={ cbContainer }
        activeDropdown={ activeDropdown }
        value={ type === 'radio' ? selectList[0] : 'Все' }
      />
      <form
        name='droplist'
        className={ cn(styles.form) }
      >
        <div className={ cn(styles.list, {
          [styles.active]: activeDropdown,
        })}>
          { list.map((item: string | number, i): JSX.Element => (
            <DroplistItems
              type={ type }
              item={ item }
              key={ i }
              cb={ cbItems }
              activeCheckbox={selectList.some(itemSelect => itemSelect.toLocaleLowerCase() === String(item).toLocaleLowerCase())}
            />
          ))}
        </div>
        { selectList.length > 0 && type !== 'radio'
          && <ListSelected selectList={ selectList } cb={getValue} activeDropdown={ activeDropdown } /> }
      </form>
    </div>
  );
});
