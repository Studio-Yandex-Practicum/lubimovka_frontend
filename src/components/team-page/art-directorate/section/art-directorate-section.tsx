import React, { FC } from 'react';

import ArtDirectorateList from 'components/team-page/art-directorate/list';
import { FestivalTeams } from 'api-typings';

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
        <ArtDirectorateList cards={cards}/>
      </div>
    </section>
  );
};

export default ArtDirectorateSection;
