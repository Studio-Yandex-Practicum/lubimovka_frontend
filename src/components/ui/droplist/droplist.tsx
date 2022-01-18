import React, { FC, useEffect, useState, useCallback, useImperativeHandle, forwardRef, useRef } from 'react';
import cn from 'classnames';

import { DroplistItems } from './droplist-items';
import { ListSelected } from './list-selected';
import { ContainerButton } from './container-button';

import styles from './droplist.module.css';

export interface IDroplistPublic {
  deleteAll: () => void,
  deleteItem: (value: string) => void,
  addSelectItems: (valueList: string[]) => void,
}

interface IDroplistProps {
  cb: (selectList: string[]) => void
  data: string[] | number[]
  type?: 'checkbox' | 'radio'
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
    className,
    defaultValue
  } = props;

  const [ selectList, setSelectList ] = useState<string[]>([]);
  const [ list, setList ] = useState<string[] | number[]>([]);
  const [ activeDropdown, setActiveDropdown ] = useState(false);

  const droplistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Array.isArray(data)) {
      setList(data);
      return;
    }
  }, [ data ]);

  useEffect(() => {
    cb(selectList);
  }, [cb, selectList]);

  const deleteItemInSelectList = (value: string) => {
    return setSelectList(state => [...state.filter((item) => item !== value.toLowerCase())]);
  };

  const handleClose = (e: MouseEvent) => {
    const droplist = droplistRef.current;
    if(e?.target instanceof Node && droplist) {
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
  }), []);

  const cbContainer = useCallback(() => {
    setActiveDropdown(state => !state);
  }, []);

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
  }, [type]);

  const getValue = (value: string) => {
    deleteItemInSelectList(value);
  };

  const droplistClass = className ? className : styles.droplistWidth;

  return (
    <div className={cn(styles.droplist, droplistClass)} ref={droplistRef}>
      <ContainerButton
        cb={cbContainer}
        activeDropdown={activeDropdown}
        value={type === 'radio' && selectList[0] || defaultValue || 'Все'}
      />
      <form
        name="droplist"
        className={cn(styles.form)}
      >
        <div className={cn(styles.list, {
          [styles.active]: activeDropdown,
        })}>
          {(list as any[]).map((item: string | number, i): JSX.Element => (
            <DroplistItems
              type={type}
              item={item}
              key={i}
              cb={cbItems}
              activeCheckbox={selectList.some(itemSelect => itemSelect.toLocaleLowerCase() === String(item).toLocaleLowerCase())}
            />
          ))}
        </div>
        {selectList.length > 0 && type !== 'radio'
          && <ListSelected selectList={selectList} cb={getValue} activeDropdown={activeDropdown}/>}
      </form>
    </div>
  );
});
