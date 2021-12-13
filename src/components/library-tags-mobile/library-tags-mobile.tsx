import React, { FC, useCallback, RefObject, Dispatch, useContext } from 'react';

import { Droplist, IDroplistPublic } from 'components/ui/droplist';
import { Action } from 'components/library-filter/library-filter-reducer';
import CurrentFiltersContext from 'pages/library/library-filters-context';
import { IProgram } from 'pages/library';
import { Tag } from 'components/ui/tag';

import styles from './library-tags-mobile.module.css';

export interface LibraryTagsMobileProps {
  years: number[];
  programmes: Array<IProgram>;
  filterDispatcher: Dispatch<Action>;
  onCheckResults?: () => void;
  droplistRef: RefObject<IDroplistPublic>;
}

const LibraryTagsMobile: FC <LibraryTagsMobileProps> = ({ years, programmes, filterDispatcher, onCheckResults, droplistRef }) => {
  const filterState = useContext(CurrentFiltersContext);
  console.log('mobile:', filterState);

  const handleTagClick = useCallback(
    (el: string): void => {
      if (!filterState.program.find((i) => i === el)) {
        filterDispatcher({ type: 'add programme', program: el });
      } else {
        filterDispatcher({ type: 'remove programme', program: el });
      }
    }, [filterState, filterDispatcher]);

  return (
    <ul className={styles.programmesList}>
      {programmes.map(({ pk, name }) => (
        <li onClick={() => handleTagClick(String(pk))} className={styles.programme} key={pk}>
          <Tag label={name} selected={true} isIcon={true}/></li>
      ))}
    </ul>
  );
};

export default LibraryTagsMobile;
