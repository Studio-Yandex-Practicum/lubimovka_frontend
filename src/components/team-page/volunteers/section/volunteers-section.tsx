import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './volunteers-section.module.css';
import { Icon } from 'components/ui/icon';
import { SliderYears } from 'components/ui/slider-years';
import VolunteersList from 'components/team-volunteers-list';
import { InfoLink } from 'components/ui/info-link';
import classNames from 'classnames/bind';
import { FeedbackPopup } from 'components/ui/feedback-popup';

const cx = classNames.bind(styles);

interface PersonCardData {
  id: number;
  person: {
    id: number;
    first_name: string;
    second_name: string;
    middle_name: string;
    city: string;
    email: string;
    image: string;
  };
  year: number;
  title: string;
  review: string;
}

interface VolunteersSectionProps {
  cards: Array<PersonCardData>;
}

const VolunteersSection: FC<VolunteersSectionProps> = (props) => {
  const { cards } = props;

  const [currentYear, setCurrentYear] = useState(2020);
  const [selectedCards, setSelectedCards] = useState<Array<PersonCardData>>([]);

  const years = Array.from(new Set(cards.map(card => {
    return card.year;
  }))).sort().reverse();

  const filterCards = () => {
    const filtredCards = cards.filter(card => card.year === currentYear);

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
        <h2 className={styles.title}>Волонтёры</h2>
        <SliderYears
          className={cn(styles.yearsContainer)}
          years={years}
          onClick={changeYearHandler}
          currentYear={currentYear}
        />
        <VolunteersList cards={selectedCards}/>
        <div className={styles.infoBlock}>
          <Icon className={styles.asterisk} glyph={'asterisk'}/>
          <p className={cx('info')}>
            Если вы хотите быть волонтером, напишите нам на
            <InfoLink
              href={'mailto://job@lubimovka.ru'}
              isOutsideLink={true}
              label={'job@lubimovka.ru'}
              size={'xl'}
              textDecoration={'underline'}
              className={cx('indent')}/>
              и расскажите о себе.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VolunteersSection;
