import { FC, useState, useEffect } from 'react';

import PersonCard from '../ui/persons-card/persons-card';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';


import style from './trustees-persons-list.module.css';

interface TrusteePersonData {
  id: number,
  name: string,
  link: string,
  about: string,
  participant: boolean
}

interface TrusteesPersonsProps {
  trustees: Array<TrusteePersonData>
}

const TrusteesPersons: FC<TrusteesPersonsProps> = ({ trustees }) => {

  const [screenWidth, setScreenWidth] = useState(Number || '');

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
        screenWidth < 768 &&
        <div ref={sliderRef} className="keen-slider">
          {trustees.map((trustee) => (
            <div key={trustee.id} className="keen-slider__slide">
              <PersonCard
                participant={trustee.participant}
                link={trustee.link}
                about={trustee.about}
                name={trustee.name}
              >
              </PersonCard>
            </div>
          ))}
        </div>
      }

      {
        screenWidth > 767 &&
        <ul className={style.trusteesList}>
          {trustees.map((trustee) => (
            <li key={trustee.id} className={style.trusteesListItem}>
              <PersonCard
                participant={trustee.participant}
                link={trustee.link}
                about={trustee.about}
                name={trustee.name}
              >
              </PersonCard>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default TrusteesPersons;
