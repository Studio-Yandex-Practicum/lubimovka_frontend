import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import PersonCard from '../ui/person-card/person-card';
import styles from './team-volunteers-section.module.css';
import { Icon } from 'components/ui/icon';
import { SliderYears } from 'components/ui/slider-years';
import VolunteersList from 'components/team-volunteers-list';
import { InfoLink } from 'components/ui/info-link';

interface PersonCardData {
  id: number,
  name: string,
  link: string,
  response: string,
  year: number
}

interface TeamVolunteersSectionProps {
  data: {
    id: number,
    title: string,
    content: Array<PersonCardData>
  }
}

const TeamVolunteersSection: FC<TeamVolunteersSectionProps> = ({ data }) => {
  const { title, content } = data;

  const [currentYear, setCurrentYear] = useState(2020);
  const [selectedCards, setSelectedCards] = useState<Array<PersonCardData>>([]);

  const years = Array.from(new Set(content.map(card => {
    return card.year;
  }))).sort().reverse();

  const filterCards = () => {
    const filtredCards = content.filter(card => card.year === currentYear);

    setSelectedCards(filtredCards);
  };

  useEffect(() => {
    filterCards();
  }, [currentYear]);

  const changeYearHandler = (year: number) => {
    setCurrentYear(year);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div >
          <SliderYears
            className={cn(styles.yearsContainer)}
            years={years}
            onClick={changeYearHandler}
            currentYear={currentYear}
          />
        </div>
        <VolunteersList cards={selectedCards}/>
        <div className={styles.infoBlock}>
          <Icon className={styles.asterisk} glyph={'asterisk'}/>
          <p className={styles.info}>
            Если вы хотите быть волонтером, напишите нам на more@lubimovka.ru и расскажите о себе.
          </p>
        </div>
      </div>
    </section>
  );
};

// в теге <p> необходимо добавить компонент InfoLink для адреса почты

export default TeamVolunteersSection;

//<div className={styles.cardContainer}>
//  {selectedCards.map(card => {
//    return (
//      <PersonCard
//        key={card.id}
//        participant={false}
//        name={card.name}
//        link={card.link}
//        response={card.response}
//      />
//    );
//  })}
//</div>
