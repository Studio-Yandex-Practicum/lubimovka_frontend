import React from 'react';

import styles from './masonry-grid.module.css';
import { BlogCard } from '../blog-card';

interface MasonryGridProps {
  cardsData: { id: number; image: string; author: string; title: string; subtitle: string }[],
  // cardsData: ReadonlyArray<{ id: number; image: string; author: string; title: string; subtitle: string }[]>,
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ cardsData }) => {
  return (
    <section className={styles.masonryGridSection}>
      <ul className={styles.masonryGrid}>
        {cardsData.map((card) => (
          <BlogCard
            key={card.id}
            image={card.image}
            author={card.author}
            heading={card.title}
            description={card.subtitle}
            link="https://lubimovka.ru/blog/876-int-golovanova"
          />
        )
        )}
      </ul>
    </section>
  );
};

export default MasonryGrid;
