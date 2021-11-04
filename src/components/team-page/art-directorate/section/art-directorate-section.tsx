import React, { FC } from 'react';

import ArtDirectorateList from 'components/team-art-directorate-list';
import styles from './art-directorate-section.module.css';

interface PersonCardData {
  id: number,
  person: {
    id: number;
    first_name: string;
    second_name: string;
    middle_name: string;
    city: string;
    email: string;
    image: string;
  };
  team: string,
  position: string
}

interface ArtDirectorateSectionProps {
  cards: Array<PersonCardData>
}

const ArtDirectorateSection: FC<ArtDirectorateSectionProps> = (props) => {
  const { cards } = props;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Арт-дирекция фестиваля</h2>
        <ArtDirectorateList cards={cards}/>
      </div>
    </section>
  );
};

export default ArtDirectorateSection;
