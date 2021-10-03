import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EventCard } from './event-card';

const cards = [
  {
    image: 'https://source.unsplash.com/random',
    time: '13:00',
    location: 'Площадка «8/3»',
    title: 'Камино норте',
    description: '(Не)деликатная пьеса о психоневрологическом интернате',
    playwright: 'Ольга Казакова',
    director: 'Катя Ганюшина',
    registrationUrl: '#',
  },
  {
    time: '13:00',
    location: 'Площадка «8/3»',
    title: 'Что я узнал о творчестве благодаря драматургам',
    description: 'Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.',
    playwright: 'Ольга Казакова',
    director: 'Катя Ганюшина',
    registrationUrl: '#',
  },
  {
    image: 'https://source.unsplash.com/random',
    time: '13:00',
    location: 'Площадка «8/3»',
    title: 'Ответ на пощечину',
    description: '(Не)деликатная пьеса о психоневрологическом интернате',
    playwright: 'Ольга Казакова',
    director: 'Катя Ганюшина',
  },
];

const oneCard = cards.filter((args,index) => index === 0);

export default {
  title: 'Components/EventCard',
  component: EventCard,
} as ComponentMeta<typeof EventCard>;

const Template: ComponentStory<typeof EventCard> = () => (
  <>
    {cards.map((card) => <EventCard key={card.title} {...card}/>)}
  </>
);

const TemplateOneCard: ComponentStory<typeof EventCard> = () => {
  return (
    <>
      {oneCard.map((card, index) => (
        <EventCard key={index} {...card}/>
      ))}
    </>
  );
};

export const Default = Template;
export const Event_One_Сard = TemplateOneCard.bind({});
Event_One_Сard.args = {
  image: 'https://source.unsplash.com/random',
  time: '13:00',
  location: 'Площадка «8/3»',
  title: 'Камино норте',
  description: '(Не)деликатная пьеса о психоневрологическом интернате',
  playwright: 'Ольга Казакова',
  director: 'Катя Ганюшина',
  registrationUrl: '#',
};
