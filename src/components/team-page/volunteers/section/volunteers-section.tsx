import HorizontalScroll from 'react-scroll-horizontal';
import { useMemo, useState, Fragment } from 'react';
import classNames from 'classnames/bind';

import { Menu } from 'components/ui/menu';
import { Icon } from 'components/ui/icon';
import VolunteersList from 'components/team-page/volunteers/list';
import { InfoLink } from 'components/ui/info-link';
import { usePersistentData } from 'providers/persistent-data-provider';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import * as breakpoints from 'shared/breakpoints';

import type { FC } from 'react';
import type { Volunteers } from 'api-typings';

import styles from './volunteers-section.module.css';

const cx = classNames.bind(styles);

interface VolunteersSectionProps {
  cards: Array<Volunteers>
  queryYear: number
}

const VolunteersSection: FC<VolunteersSectionProps> = (props) => {
  const { cards = [], queryYear } = props;
  // TODO: отрефакторить компонент, привести к композиции, передавать email в качестве пропса
  const { settings } = usePersistentData();

  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const MenuContainer = isMobile ? Fragment : HorizontalScroll;

  const years = useMemo(() => {
    return Array.from(new Set(cards.map(card => card.year))).sort().reverse();
  }, [cards]);

  const [currentYear, setCurrentYear] = useState(queryYear ? queryYear : years[0]);

  const selectedCards = useMemo(()=> {
    return cards.filter(card => card.year === currentYear);
  }, [currentYear]);

  const handleYearChange = (year: number) => () => {
    setCurrentYear(year);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Волонтёры
        </h2>
        {/* TODO: быстрое и грязное решения для горизонтальной прокрутки меню, нужен рефакторинг */}
        <MenuContainer
          reverseScroll
          style={{
            height: '6.063rem',
          }}
        >
          <Menu type="years">
            {years.map((year) => (
              <Menu.Item
                key={year}
                current={year === currentYear}
                onClick={handleYearChange(year)}
              >
                {year}
              </Menu.Item>
            ))}
          </Menu>
        </MenuContainer>
        <VolunteersList cards={selectedCards} currentYear={currentYear}/>
        {settings?.emailAddresses.forVolunteers && (
          <div className={styles.infoBlock}>
            <Icon className={styles.asterisk} glyph={'asterisk'}/>
            <p className={cx('info')}>
              Если вы хотите быть волонтером, напишите нам на
              <InfoLink
                href={`mailto:${settings?.emailAddresses.forVolunteers}`}
                isOutsideLink
                label={settings?.emailAddresses.forVolunteers}
                size={'xl'}
                textDecoration={'underline'}
                className={cx('indent')}
              />
              и расскажите о себе.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VolunteersSection;
