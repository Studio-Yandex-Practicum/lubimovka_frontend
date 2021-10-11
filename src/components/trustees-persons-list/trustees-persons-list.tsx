import { FC } from 'react';

import PersonCard from '../ui/persons-card/persons-card';

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

  return (
    <>
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
    </>
  );
};

export default TrusteesPersons;
