import React, { FC, useCallback, RefObject, Dispatch, useContext } from 'react';

import { Droplist, IDroplistPublic } from 'components/ui/droplist';
import { Tag } from 'components/ui/tag';
import { Button } from 'components/ui/button';
import { Action } from 'components/library-filter/library-filter-reducer';
import CurrentFiltersContext from 'pages/library/library-filters-context';
import { IProgram } from 'pages/library';

import style from './library-filter.module.css';

export interface LibraryFilterProps {
  years: number[];
  programmes: Array<IProgram>;
  filterDispatcher: Dispatch<Action>;
  onCheckResults?: () => void;
  droplistRef: RefObject<IDroplistPublic>;
}

const LibraryFilter: FC<LibraryFilterProps> = ({ years, programmes, filterDispatcher, onCheckResults, droplistRef }) => {
  const filterState = useContext(CurrentFiltersContext);

  const handleTagClick = useCallback(
    (el: string): void => {
      if (!filterState.program.find((i) => i === el)) {
        filterDispatcher({ type: 'add programme', program: el });
      } else {
        filterDispatcher({ type: 'remove programme', program: el });
      }
    }, [filterState, filterDispatcher]);

  const handleResetClick = useCallback((): void => {
    filterDispatcher({ type: 'reset' });
    droplistRef.current?.deleteAll();
  }, [filterDispatcher, droplistRef]);

  const handleYearsClick = useCallback((years: string[]): void => {
    filterDispatcher({ type: 'add years', festival: years });
  }, [filterDispatcher]);

  return (
    <div className={style.container}>
      <div className={style.years}>
        <h2 className={style.title}>Годы фестиваля</h2>
        <Droplist type="checkbox" cb={handleYearsClick} data={years} ref={droplistRef}/>
      </div>
      <div className={style.programmes}>
        <h2 className={style.title}>Программа</h2>
        <ul className={style.programmesList}>
          {programmes.map(({ pk, name }) => (
            <li onClick={() => handleTagClick(String(pk))} className={style.programme} key={pk}>
              <Tag label={name} selected={filterState.program.includes(String(pk))}/></li>
          ))}
        </ul>
      </div>
      {(filterState.festival.length > 0 || filterState.program.length > 0) && (
        <>
          <div className={style.buttonWrap}>
            <Button onClick={handleResetClick} label="Очистить" size="s" icon="cross"
              iconPlace="left" border="bottomLeft" width="scale(143px)" align="start"
              gap="scale(3px)"/>
          </div>
          <div className={style.mobileButtons}>
            <Button onClick={handleResetClick} size="l" iconPlace="right" icon="cross"
              label="Очистить" border="full" className={style.button}/>
            <Button onClick={onCheckResults} size="l" iconPlace="right" icon="arrow-right"
              label="Посмотреть" border="full" className={style.button}/>
          </div>
        </>
      )}
    </div>
  );
};

export default LibraryFilter;
