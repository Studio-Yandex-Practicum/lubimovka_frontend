import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './droplist.module.css';

// Компоненты
import { DroplistItems } from './index';
import { ListSelected } from './index';
import { ContainerButton } from './index';

// utile
import { createList } from './index';

interface IDroplistProps {
  dataType: Array<string> | Array<number> | 'years' | 'months',
  handlerSubmitDroplist: (selectList: string[]) => void,
  maxWidth?: string | number,
}

export const Droplist: FC<IDroplistProps> = ({ dataType, handlerSubmitDroplist, maxWidth }): JSX.Element => {
  // Выбранный список пользователем. Вынести в компонент формы.
  const [ selectList, setSelectList ] = useState<string[]>([]);

  // Список для вывода
  const [ list, getList ] = useState<string[] | number[]>([]);
  // Выбран ли Dropdown
  const [ activeDropdown, setActiveDropdown ] = useState(false);
  // Максимальная ширина всего компонента
  const [ maxWidthDroplist, setmaxWidthDroplist ] = useState('300');

  // Записывает длину основного блока, если она передана в state
  const addmaxWidthDroplist = () => {
    if (maxWidth) {
      switch (typeof maxWidth) {
      case 'number': setmaxWidthDroplist(String(maxWidth)); break;
      case 'string': setmaxWidthDroplist(maxWidth); break;
      }
    }
  };

  useEffect(() => {
    // Если передают свой объект
    if (Array.isArray(dataType)) {
      getList(dataType);
      return;
    }
    // createList формирует отдельные массивы зависящий от передаваемого типа списка
    const list = createList(dataType);
    if (list) {
      getList(list);
    }
    addmaxWidthDroplist();
  }, []);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handlerSubmitDroplist(selectList);
  };

  // Рендерит компонент ListSelected при условии что список открыт и выбранный список не пустой
  const renderListSelected = (): JSX.Element | null => {
    if (activeDropdown && selectList.length > 0) {
      return (
        <ListSelected selectList={ selectList } />
      );
    }
    return null;
  };

  return (
    <div className={ cn(styles.dropdown) } style={{ maxWidth: `${maxWidthDroplist}px` }}>
      <ContainerButton setActiveDropdown={ setActiveDropdown } />
      <form
        name='dropdown'
        className={ cn(styles.form) }
        onSubmit={ handlerSubmit }
      >
        <div className={ cn(styles.list, {
          [styles.active]: activeDropdown,
        })}>
          {
            list.map((month: string | number, i): JSX.Element => {
              return (
                <DroplistItems
                  month={ month }
                  key={ i }
                  setSelectList={ setSelectList }
                />
              );
            })
          }
        </div>
        {
          renderListSelected()
        }
      </form>
    </div>
  );
};
