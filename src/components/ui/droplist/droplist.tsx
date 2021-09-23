import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { Icon } from '../icon';

import styles from './droplist.module.css';

// Компоненты
import DroplistItems from './droplist-items/droplist-items';
import ListSelected from './list-selected/list-selected';

interface IDropdownProps {
  type: 'months' | 'years',
}

export const Droplist: FC<IDropdownProps> = ({ type }): JSX.Element => {
  // Список для вывода
  const [ list, getList ] = useState<string[] | number[]>([]);
  // Выбранный список пользователем
  const [ selectList, setSelectList ] = useState<string[]>([]);
  // Выбран ли Dropdown
  const [ activeDropdown, setActiveDropdown ] = useState(false);

  const clickActiveDropdown = (): void => {
    setActiveDropdown(!activeDropdown);
  };

  useEffect(() => {
    // Год и месяцы приходят от сервера
    const years: number[] = [];
    for (let i = 2009; i <= 2021; i++) {
      years.push(i);
    }
    const months = [
      'Январь', 'Февраль',
      'Март', 'Апрель',
      'Май', 'Июнь',
      'Июль', 'Август',
      'Сентябрь', 'Октябрь',
      'Ноябрь', 'Декабрь',
    ];
    switch (type) {
    case 'months': getList(months); break;
    case 'years': getList(years); break;
    }
  }, []);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className={ cn(styles.dropdown) }>
      <div
        className={ cn(styles.container) }
        onClick={ clickActiveDropdown }
      >
        <p className={ cn(styles.text) }>
          Все
        </p>
        {
          <Icon glyph='arrow-down' fill='black' className={ styles.iconArrowDown } />
        }
      </div>
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
