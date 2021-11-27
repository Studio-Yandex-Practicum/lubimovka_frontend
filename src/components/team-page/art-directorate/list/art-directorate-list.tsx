import { FC, useEffect, useMemo, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import classNames from 'classnames/bind';

import PersonCard from '../../../ui/person-card/person-card';

import styles from './art-directorate-list.module.css';

const cx = classNames.bind(styles);

interface PersonCardData {
  id: number;
  person: {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    city: string;
    email: string;
    image: string;
  };
  team: string;
  position: string;
}

interface ArtDirectorateCardsProps {
  cards: Array<PersonCardData>
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

  const selectedCards = useMemo(()=> {
    return cards.filter(card => card.team === 'art');
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
          className={cx({ [styles.grid]: selectedCards.length < 5 || selectedCards.length > 6 },
            { [styles.flex]: selectedCards.length === 6 },
            { [styles.flex]: selectedCards.length === 5 })}>
          {cards.map((card) => (
            card.team === 'art' &&
            <li key={card.id}
              className={cx({ [styles.fiveElements]: selectedCards.length === 5 },
                { [styles.sixElements]: selectedCards.length === 6 })}>
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
