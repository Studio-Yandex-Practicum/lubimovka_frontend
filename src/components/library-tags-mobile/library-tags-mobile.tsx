import React, { FC, useCallback, Dispatch, useContext, useMemo, RefObject } from 'react';

import { Action } from 'components/library-filter/library-filter-reducer';
import { LibraryFiltersProviderContext } from 'providers/library-filters-provider';
import { IProgram } from 'pages/library';
import { Tag } from 'components/ui/tag';
import { IDroplistPublic } from 'components/ui/droplist';

import styles from './library-tags-mobile.module.css';

export interface LibraryTagsMobileProps {
  programmes: Array<IProgram>;
  filterDispatcher: Dispatch<Action>;
  droplistRef: RefObject<IDroplistPublic>;
}

const LibraryTagsMobile: FC <LibraryTagsMobileProps> = ({ programmes, filterDispatcher, droplistRef }) => {
  const filterState = useContext(LibraryFiltersProviderContext);

  const selectedProgrammes = useMemo(()=> {
    return programmes.filter((tag) => filterState.program.includes(String(tag.pk)));
  }, [filterState.program, programmes]);

  const handleTagClick = useCallback(
    (el: string): void => {
      filterDispatcher({ type: 'remove programme', program: el });
    }, [filterDispatcher]);

  const handleYearClick = useCallback((year: string): void => {
    filterDispatcher({ type: 'remove year', festival: year });
    droplistRef.current?.deleteItem(year);
  }, [filterDispatcher, droplistRef]);

  return (
    <ul className={styles.programmesList}>
      {filterState.festival.map((year, idx) => (
        <li onClick={() => handleYearClick(String(year))} className={styles.programme} key={idx}>
          <Tag label={String(year)} selected={true} isIcon={true}/></li>
      ))}
      {selectedProgrammes.map(({ pk, name }) => (
        <li onClick={() => handleTagClick(String(pk))} className={styles.programme} key={pk}>
          <Tag label={name} selected={true} isIcon={true}/></li>
      ))}
    </ul>
  );
};

export default LibraryTagsMobile;
