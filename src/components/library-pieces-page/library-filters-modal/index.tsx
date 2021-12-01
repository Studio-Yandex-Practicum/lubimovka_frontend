import { FC } from 'react';

import LibraryFilter, { LibraryFilterProps } from 'components/library-filter/library-filter';

import styles from './index.module.css';

const LibraryFiltersModal: FC<LibraryFilterProps> = ({ years, programmes,
  filterState, filterDispatcher, onCheckResults }) => {
  return (
    <section className={styles.wrap}>
      <LibraryFilter years={years} programmes={programmes}
        filterState={filterState} filterDispatcher={filterDispatcher} onCheckResults={onCheckResults}/>
    </section>
  );
};

export default LibraryFiltersModal;
