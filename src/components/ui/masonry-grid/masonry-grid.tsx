import React from 'react';

import styles from './masonry-grid.module.css';

interface MasonryGridProps {
  cardsData: ReadonlyArray<string>,
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ cardsData }) => {
  return (
    <section className={styles.masonryGridSection}>
      <ul className={styles.masonryGrid}>
        {cardsData.map((card) => {
          <li className={styles.gridItem}>
            {JSON.stringify(card)}
          </li>;
        })}
      </ul>
    </section>
  );
};

export default MasonryGrid;
