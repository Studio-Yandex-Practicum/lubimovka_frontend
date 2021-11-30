import React, { FC, useCallback, useReducer, RefObject, useRef } from 'react';

import { Droplist, IDroplistPublic } from 'components/ui/droplist';
import { Tag } from 'components/ui/tag';
import { Button } from 'components/ui/button';
import reducer from './library-filter-reducer';

import style from './library-filter.module.css';

interface LibraryFilterProps {
  years: number[];
  programmes: string[];
}

const LibraryFilter: FC<LibraryFilterProps> = ({ years, programmes }) => {
  const filterInitialState = { years: [], programmes: [] };
  const droplistRef = useRef(null) as RefObject<IDroplistPublic>;

  const [filterState, filterDispatcher] = useReducer(
    reducer,
    filterInitialState,
    undefined
  );

  const handleTagClick = useCallback(
    (el: string): void => {
      if (!filterState.programmes.find((i) => i === el)) {
        filterDispatcher({ type: 'add programme', programme: el });
      } else {
        filterDispatcher({ type: 'remove programme', programme: el });
      }
    }, [filterState]);

  const handleResetClick = useCallback((): void => {
    filterDispatcher({ type: 'reset' });
    droplistRef.current?.deleteAll();
  }, []);

  const handleYearsClick = useCallback((years: string[]): void => {
    filterDispatcher({ type: 'add years', years: years });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.years}>
        <h2 className={style.title}>Годы фестиваля</h2>
        <Droplist type='checkbox' cb={handleYearsClick} data={years} ref={droplistRef}/>
      </div>
      <div className={style.programmes}>
        <h2 className={style.title}>Программа</h2>
        <ul className={style.programmesList}>
          {programmes.map((el, id) => (
            <li onClick={() => handleTagClick(el)} className={style.programme} key={id}>
              <Tag label={el} selected={filterState.programmes.includes(el)}/></li>
          ))}
        </ul>
      </div>
      {(filterState.years.length > 0 || filterState.programmes.length > 0) &&
      <Button onClick={handleResetClick} label='Очистить' size='s' icon='cross'
        iconPlace='left' border='bottomLeft' width='scale(143px)' align='start'
        gap='scale(3px)'/>
      }
    </div>
  );
};

export default LibraryFilter;
