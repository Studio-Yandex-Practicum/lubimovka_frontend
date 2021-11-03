import { FC, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import styles from './team-art-directorate-list.module.css';

import PersonCard from '../ui/person-card/person-card';
import classNames from 'classnames/bind';

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
  team: string;
  position: string;
}

interface ArtDirectorateCardsProps {
  cards: Array<PersonCardData>
}


const ArtDirectorateList: FC<ArtDirectorateCardsProps> = ({ cards }) => {
  const selectedCards = cards.filter(card => card.team === 'art');
  console.log(selectedCards.length);

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
                link={card.person.image}
                about={card.position}
                name={`${card.person.first_name} ${card.person.second_name}`}
              >
              </PersonCard>
            </div>
          ))}
        </div>
      }

      {
        Number(screenWidth) > 728 &&
        //необходимо прописать условие в другом формате, потому что в таком виде не работает
        <ul className={cx('flex', {[styles.grid]: selectedCards.length !== (6 || 5)})}>
          {cards.map((card) => (
            card.team === 'art' &&
            <li key={card.id} className={cx({[styles.fiveElements]: selectedCards.length === 5}, {[styles.sixElements]: selectedCards.length === 6})}>
              <PersonCard
                participant={true}
                link={card.person.image}
                about={card.position}
                name={`${card.person.first_name} ${card.person.second_name}`}
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
