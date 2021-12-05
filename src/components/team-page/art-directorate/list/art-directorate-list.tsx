import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import classNames from 'classnames/bind';

import { PersonCard } from '../../../ui/person-card/person-card';
import { FestivalTeams } from 'api-typings';

import styles from './art-directorate-list.module.css';

const cx = classNames.bind(styles);

interface ArtDirectorateCardsProps {
  cards: Array<FestivalTeams>
}

const ArtDirectorateList: FC<ArtDirectorateCardsProps> = ({ cards }) => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    spacing: 30,
    slidesPerView: 3,
    breakpoints: {
      '(max-width: 728px)': {
        slidesPerView: 2.5,
        mode: 'free-snap',
      },
      '(max-width: 650px)': {
        slidesPerView: 2,
        mode: 'free-snap',
      },
      '(max-width: 520px)': {
        slidesPerView: 1.7,
        mode: 'free-snap',
      },
      '(max-width: 450px)': {
        slidesPerView: 1.5,
        mode: 'free-snap',
      },
    },
  });

  const selectedCards = useMemo(() => {
    return cards.filter(card => card.team === 'art');
  }, []);

  const checkForMultiplicity = useCallback((n: number) => {
    return selectedCards.length % n === 0;
  }, []);

  useEffect(() => {
    setScreenWidth(document.documentElement.clientWidth);
  }, []);

  useEffect(() => {
    slider?.refresh();
  }, [screenWidth]);

  return (
    <>
      {
        Number(screenWidth) < 729 &&
        <div ref={sliderRef} className="keen-slider">
          {cards.map((card) => (
            card.team === 'art' &&
            <div key={card.id} className="keen-slider__slide">
              <PersonCard
                participant={true}
                image={card.person.image}
                about={card.position}
                name={`${card.person.first_name} ${card.person.last_name}`}
              >
              </PersonCard>
            </div>
          ))}
        </div>
      }

      {
        Number(screenWidth) > 728 &&
        <ul
          className={cx({ [styles.grid]: selectedCards.length < 5 && !checkForMultiplicity(3) },
            { [styles.flex]: checkForMultiplicity(3) },
            { [styles.flex]: selectedCards.length > 4 && !checkForMultiplicity(3) })}>
          {selectedCards.map((card) => (
            <li key={card.id}
              className={cx({ [styles.fiveElements]: selectedCards.length > 4 && !checkForMultiplicity(3) },
                { [styles.sixElements]: checkForMultiplicity(3) })}
            >
              <PersonCard
                participant={true}
                image={card.person.image}
                about={card.position}
                name={`${card.person.first_name} ${card.person.last_name}`}
              >
              </PersonCard>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default ArtDirectorateList;
