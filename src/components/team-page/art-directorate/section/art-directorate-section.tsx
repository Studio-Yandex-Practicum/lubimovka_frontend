import React, { FC } from 'react';

import { FestivalTeams } from '__generated__/api-typings';
import PersonsList from '../../../persons-list';

import styles from './art-directorate-section.module.css';

interface ArtDirectorateSectionProps {
  cards: Array<FestivalTeams>
}

const ArtDirectorateSection: FC<ArtDirectorateSectionProps> = (props) => {
  const { cards } = props;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Арт-дирекция фестиваля
        </h2>
        <PersonsList persons={cards}/>
      </div>
    </section>
  );
};

export default ArtDirectorateSection;
