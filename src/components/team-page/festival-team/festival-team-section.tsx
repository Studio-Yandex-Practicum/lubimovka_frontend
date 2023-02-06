import { useMemo } from 'react';

import PersonsList from 'components/persons-list';

import type { FestivalTeams } from '__generated__/api-typings';

import styles from './festival-team-section.module.css';

interface FestivalTeamSectionProps {
  cards: Array<FestivalTeams>
}

const FestivalTeamSection: React.FC<FestivalTeamSectionProps> = (props) => {
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
        <PersonsList persons={selectedCards}/>
      </div>
    </section>
  );
};

export default FestivalTeamSection;
