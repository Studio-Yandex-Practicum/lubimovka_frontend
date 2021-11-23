import React, { FC, useMemo } from 'react';

import TrusteesPersons from 'components/trustees-persons-list';
import styles from './festival-team-section.module.css';

interface PersonCardData {
  id: number,
  person: {
    id: number,
    first_name: string,
    last_name: string,
    middle_name: string,
    city: string,
    email: string,
    image: string,
  };
  team: string,
  position: string
}

interface FestivalTeamSectionProps {
  cards: Array<PersonCardData>
}

const FestivalTeamSection: FC<FestivalTeamSectionProps> = (props) => {
  const { cards } = props;

  const selectedCards = useMemo(()=> {
    return cards.filter(card => card.team === 'fest');
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Команда фестиваля</h2>
        <TrusteesPersons trustees={selectedCards}/>
      </div>
    </section>
  );
};

export default FestivalTeamSection;
