import React, { FC, useMemo } from 'react';

import TrusteesPersons from 'components/trustees-persons-list';
import { FestivalTeams } from 'api-typings';

import styles from './festival-team-section.module.css';

interface FestivalTeamSectionProps {
  cards: Array<FestivalTeams>
}

const FestivalTeamSection: FC<FestivalTeamSectionProps> = (props) => {
  const { cards } = props;

  const selectedCards = useMemo(()=> {
    return cards.filter(card => card.team === 'fest');
  }, [cards]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Команда фестиваля
        </h2>
        <TrusteesPersons trustees={selectedCards}/>
      </div>
    </section>
  );
};

export default FestivalTeamSection;
