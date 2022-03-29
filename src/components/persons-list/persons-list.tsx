import { FC } from 'react';

import { PersonCard } from '../ui/person-card/person-card';
import 'keen-slider/keen-slider.min.css';
import { Sponsor } from 'api-typings';

import style from './persons-list.module.css';

interface PersonsListProps {
  persons: Array<Sponsor>
}

const PersonsList: FC<PersonsListProps> = ({ persons }) => {

  return (
    <ul className={style.personsList}>
      {persons.map((person) => (
        <li key={person.id} className={style.personsListItem}>
          <PersonCard
            participant={true}
            image={person.person.image}
            about={person.position}
            name={`${person.person.first_name} ${person.person.last_name}`}
          >
          </PersonCard>
        </li>
      ))}
    </ul>
  );
};

export default PersonsList;
