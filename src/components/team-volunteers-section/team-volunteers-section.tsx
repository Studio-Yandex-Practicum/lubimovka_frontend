import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import PersonCard from '../ui/persons-card/persons-card';
import style from './team-volunteers-section.module.css';
import { Icon } from 'components/ui/icon';
import { SliderYears } from 'components/ui/slider-years';

interface PersonCardData {
  id: number,
  name: string,
  link: string,
  response: string,
  year: number
}

interface TeamVolunteersSectionProps {
  data: {
    id: number
    title: string
    content: Array<PersonCardData>
  }
}

const TeamVolunteersSection: FC<TeamVolunteersSectionProps> = ({ data }) => {
  const { title, content } = data;

  const [currentYear, setCurrentYear] = useState(2020);
  const [selectedCards, setSelectedCards] = useState<Array<PersonCardData>>([]);

  const years = Array.from(new Set(content.map(card => {
    return card.year;
  }))).sort().reverse();

  const filterCards = () => {
    const filtredCards = content.filter(card => card.year === currentYear);

    setSelectedCards(filtredCards);
  };

  useEffect(() => {
    filterCards();
  }, [currentYear]);

  const test = (year: number) => {
    setCurrentYear(year);
  };

  return (
    <section className={style.section}>
      <h2 className={style.title}>{title}</h2>
      <SliderYears years={years} className={cn(style.yearsContainer)} currentYear={2020} onClick={test}/>
      <div className={style.cardContainer}>
        {selectedCards.map(card => <PersonCard key={card.id} participant={false} name={card.name} link={card.link} response={card.response}/>)}
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

export default TeamVolunteersSection;
