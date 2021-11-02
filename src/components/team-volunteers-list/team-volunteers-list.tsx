import { FC, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import styles from './team-volunteers-list.module.css';
import classNames from 'classnames';
import cn from 'classnames';

import PersonCard from '../ui/person-card/person-card';

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

interface VolunteersCardsProps {
  cards: Array<PersonCardData>
}

const VolunteersList: FC<VolunteersCardsProps> = ({ cards }) => {

  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    spacing: 30,
    slidesPerView: 3,
    breakpoints: {
      '(max-width: 727px)': {
        slidesPerView: 3,
        mode: 'free-snap',
      },
      '(max-width: 650px)': {
        slidesPerView: 2.3,
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

  return (
    <>
      {
        Number(screenWidth) < 729 &&
        <div ref={sliderRef} className={cx('keen-slider', [styles.slidesContainer])}>
          {cards.map((card) => (
            <div key={card.id} className={cx('keen-slider__slide', [styles.card])}>
              <PersonCard
                participant={false}
                link={card.person.image}
                response={card.review}
                name={`${card.person.first_name} ${card.person.second_name}`}
              >
              </PersonCard>
            </div>
          ))}
        </div>
      }

      {
        Number(screenWidth) > 728 &&
        <ul className={cn(styles.container)}>
          {cards.map((card) => (
            <li key={card.id} className={cn(styles.card)}>
              <PersonCard
                participant={false}
                link={card.person.image}
                response={card.review}
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

export default VolunteersList;
