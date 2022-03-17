import React, { FC, useCallback, useMemo, useState } from 'react';
import cn from 'classnames';
import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';
import { SliderYears } from 'components/ui/slider-years';
import VolunteersList from 'components/team-page/volunteers/list';
import { InfoLink } from 'components/ui/info-link';
import { Volunteers } from 'api-typings';

import styles from './volunteers-section.module.css';

const cx = classNames.bind(styles);

interface VolunteersSectionProps {
  cards: Array<Volunteers>
  queryYear: number
}

const VolunteersSection: FC<VolunteersSectionProps> = (props) => {
  const { cards = [], queryYear } = props;

  const years = useMemo(() => {
    return Array.from(new Set(cards.map(card => card.year))).sort().reverse();
  }, [cards]);

  const [currentYear, setCurrentYear] = useState(queryYear ? queryYear : years[0]);

  const selectedCards = useMemo(()=> {
    return cards.filter(card => card.year === currentYear);
  }, [currentYear]);

  const changeYearHandler = useCallback((year:number)=> {
    setCurrentYear(year);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Волонтёры
        </h2>
        <SliderYears
          className={cn(styles.yearsContainer)}
          years={years}
          onClick={changeYearHandler}
          currentYear={currentYear}
        />
        <VolunteersList cards={selectedCards} currentYear={currentYear}/>
        <div className={styles.infoBlock}>
          <Icon className={styles.asterisk} glyph={'asterisk'}/>
          <p className={cx('info')}>
            Если вы хотите быть волонтером, напишите нам на
            <InfoLink
              href={'mailto:job@lubimovka.ru'}
              isOutsideLink
              label={'job@lubimovka.ru'}
              size={'xl'}
              textDecoration={'underline'}
              className={cx('indent')}
            />
            и расскажите о себе.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VolunteersSection;
