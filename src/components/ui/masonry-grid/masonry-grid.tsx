import React from 'react';

import styles from './masonry-grid.module.css';

interface MasonryGridProps {
  // cardsData: ReadonlyArray<string | number>,
  cardsData: any,
}

const MasonryGrid: React.FC<MasonryGridProps> = (props) => {
  const { cardsData } = props;
  return (
    <section className={styles.masonryGridSection}>
      <ul className={styles.masonryGrid}>
        {cardsData.map((card: { id: React.Key | null | undefined; }) => (
          <li className={styles.gridItem} key={card.id}>
            {JSON.stringify(card)}
          </li>
        )
        )}
      </ul>
    </section>
  );
};

export default MasonryGrid;
