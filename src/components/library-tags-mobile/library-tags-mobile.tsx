import React, { FC, useCallback, Dispatch, useContext, useMemo } from 'react';

import { Action } from 'components/library-filter/library-filter-reducer';
import { LibraryFiltersProviderContext } from 'providers/library-filters-provider';
import { IProgram } from 'pages/library';
import { Tag } from 'components/ui/tag';
import { DroplistOption } from 'components/ui/droplist';

import styles from './library-tags-mobile.module.css';

export interface LibraryTagsMobileProps {
  programmes: Array<IProgram>;
  filterDispatcher: Dispatch<Action>;
}

const LibraryTagsMobile: FC <LibraryTagsMobileProps> = ({ programmes, filterDispatcher }) => {
  const filterState = useContext(LibraryFiltersProviderContext);

  const selectedProgrammes = useMemo(()=> {
    return programmes.filter((tag) => filterState.program.includes(String(tag.pk)));
  }, [filterState.program, programmes]);

  const handleTagClick = useCallback(
    (el: string): void => {
      filterDispatcher({ type: 'remove programme', program: el });
    }, [filterDispatcher]);

  const handleYearClick = useCallback((year: DroplistOption): void => {
    filterDispatcher({ type: 'remove year', festival: year });
  }, [filterDispatcher]);

  return (
    <ul className={styles.programmesList}>
      {filterState.festival.map((year, idx) => (
        <li onClick={() => handleYearClick(year)} className={styles.programme} key={idx}>
          <Tag label={year.text} selected={true} isIcon={true}/></li>
      ))}
      {selectedProgrammes.map(({ pk, name }) => (
        <li onClick={() => handleTagClick(String(pk))} className={styles.programme} key={pk}>
          <Tag label={name} selected={true} isIcon={true}/></li>
      ))}
    </ul>
  );
};

export default LibraryTagsMobile;
