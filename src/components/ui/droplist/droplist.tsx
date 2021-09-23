import React, { FC, useEffect, useState, /* SetStateAction */ } from 'react';
import cn from 'classnames';

import styles from './droplist.module.css';

// Компоненты
import DroplistItems from './droplist-items/droplist-items';
import ListSelected from './list-selected/list-selected';
import ContainerButton from './container-button/container-button';

interface IDroplistProps {
  dataType: Array<string> | Array<number>,
  handlerSubmitDroplist: (selectList: string[]) => void,
}

export const Droplist: FC<IDroplistProps> = ({ dataType, handlerSubmitDroplist }): JSX.Element => {
  // Выбранный список пользователем. Вынести в компонент формы.
  const [ selectList, setSelectList ] = useState<string[]>([]);

  // Список для вывода
  const [ list, getList ] = useState<string[] | number[]>([]);
  // Выбран ли Dropdown
  const [ activeDropdown, setActiveDropdown ] = useState(false);

  useEffect(() => {
    getList(dataType);
  }, []);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handlerSubmitDroplist(selectList);
  };

  return (
    <div className={ cn(styles.dropdown) }>
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
          activeDropdown && selectList.length > 0 ?
            <ListSelected selectList={ selectList } /> :
            null
        }
      </form>
    </div>
  );
};
