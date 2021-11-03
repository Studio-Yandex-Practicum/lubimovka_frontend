import React, { FC } from 'react';

import TrusteesPersons from 'components/trustees-persons-list';
import styles from './festival-team-section.module.css';

interface PersonCardData {
  id: number,
  name: string,
  link: string,
  about: string,
  participant: boolean
}

interface FestivalTeamSectionProps {
  cards: Array<PersonCardData>
}

const FestivalTeamSection: FC<FestivalTeamSectionProps> = (props) => {
  const { cards } = props;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Команда фестиваля</h2>
        <TrusteesPersons trustees={cards} />
      </div>
    </section>
  );
};

export default FestivalTeamSection;
