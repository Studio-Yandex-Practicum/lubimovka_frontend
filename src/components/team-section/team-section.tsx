import React, { FC } from 'react';
import cn from 'classnames';

import PersonCard from '../ui/persons-card/persons-card';

import style from './team-section.module.css';
import { Icon } from 'components/ui/icon';

interface PersonCardData {
  id: number,
  name: string,
  link: string,
  response: string,
}

interface TeamSectionProps {
  data: {
    id: number
    title: string
    content: Array<PersonCardData>
  }
}

const TeamSection: FC<TeamSectionProps> = ({ data }) => {
  const years = 0;
  const { title, content } = data;

  return (
    <section className={style.section}>
      <h2 className={style.title}>{title}</h2>
      {years}
      <div className={style.cardContainer}>
        {content.map(card => <PersonCard key={card.id} participant={false} name={card.name} link={card.link} response={card.response}/>)}
      </div>
      <div className={style.infoBlock}>
        <Icon className={style.asterisk} glyph={'asterisk'}/>
        <p className={style.info}>Если вы хотите быть волонтером, напишите нам на job@lubimovka.ru и расскажите о себе.</p>
      </div>
    </section>
  );
};

// создать и добавить компонент слайдера годов, изменить входящие данные для отрисовки
// в теге <p> необходимо добавить компонент InfoLink для адреса почты

export default TeamSection;
