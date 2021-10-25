import { FC, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import styles from './team-art-directorate-list.module.css';
import classNames from 'classnames';
import cn from 'classnames';

import PersonCard from '../ui/person-card/person-card';

const cx = classNames.bind(styles);

interface PersonCardData {
  id: number,
  name: string,
  link: string,
  about: string
}

interface ArtDirectorateCardsProps {
  cards: Array<PersonCardData>
}


const ArtDirectorateList: FC<ArtDirectorateCardsProps> = ({ cards }) => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    spacing: 30,
    slidesPerView: 3,
    breakpoints: {
      '(max-width: 767px)': {
        slidesPerView: 3,
        mode: 'free-snap',
      },
      '(max-width: 750px)': {
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

  return (
    <>
      {
        screenWidth < 728 &&
        <div ref={sliderRef} className="keen-slider">
          {cards.map((card) => (
            <div key={card.id} className="keen-slider__slide">
              <PersonCard
                participant={true}
                link={card.link}
                about={card.about}
                name={card.name}
              >
              </PersonCard>
            </div>
          ))}
        </div>
      }

      {
        screenWidth > 727 &&
        <ul className={styles.trusteesList}>
          {cards.map((card) => (
            <li key={card.id} className={styles.trusteesListItem}>
              <PersonCard
                participant={true}
                link={card.link}
                about={card.about}
                name={card.name}
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
