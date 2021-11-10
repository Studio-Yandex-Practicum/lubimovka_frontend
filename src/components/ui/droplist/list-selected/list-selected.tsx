import React, { FC } from 'react';
import cn from 'classnames';

import { Icon } from '../../icon';

import styles from './list-selected.module.css';

interface IListSelectedProps {
  selectList: string[],
  setMaxWidth: () => string,
}

export const ListSelected: FC<IListSelectedProps> = ({ selectList, setMaxWidth }): JSX.Element => {
  return (
    <div className={ cn(styles.container, {
      [styles.bottom]: selectList.length > 1,
    })}>
      <ul 
        className={ cn(styles.list) } 
        style={{ gridTemplateColumns: `repeat(auto-fit, max(${setMaxWidth()}))` }}
      >
        { selectList.map((item, i) => (
          <li className={ cn(styles.item) } key={ i } >
            { item }
          </li>
        ))}
      </ul>
      <button className={ cn(styles.button) } >
        <Icon 
          glyph='arrow-right' 
          fill='black' 
          className={ styles.iconArrowRight } 
        />
      </button>
    </div>
  );
};
