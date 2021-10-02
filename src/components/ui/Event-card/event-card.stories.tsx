import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EventСard } from './event-card';

const eventCardArgs = [
  {
    time:'13:00',
    location:'Площадка «8/3»',
    title:'Что я узнал',
    description:'Гости',
    playwright:'Ольга',
    director:'Катя',
    image:
    'https://images.unsplash.com/photo-1621636723658-a062df4cbb2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    href: 'https://yandex.ru',
    button: true,
  },
  {
    time:'19:00',
    location:'Площадка «8/3»',
    title:'Что я узнал о творчестве благодаря драматургам',
    description:'(Не)деликатная пьеса о психоневрологическом интернате',
    playwright:'Ольга Казакова',
    director:'Катя Ганюшина',
    button: false,
  },
  {
    time:'19:00',
    location:'Площадка «8/3»',
    title:'Что я узнал о творчестве благодаря драматургам',
    description:'(Не)деликатная пьеса о психоневрологическом интернате',
    playwright:'Ольга Казакова',
    director:'Катя Ганюшина',
    image:
    'https://images.unsplash.com/photo-1621636723658-a062df4cbb2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    href: 'https://yandex.ru',
    button: true,
  },
  {
    time:'19:00',
    location:'Площадка «8/3»',
    title:'Что я узнал',
    description:'(Не)деликатная пьеса о психоневрологическом интернате',
    playwright:'Ольга Казакова',
    director:'Катя Ганюшина',
    button: false,
  },
];

const oneCard = eventCardArgs.filter((args,index) => index === 0);

export default {
  title: 'Components/EventСard',
  component: EventСard,
} as ComponentMeta<typeof EventСard>;

const Template: ComponentStory<typeof EventСard> = (args) => {
  return (
    <>
      {eventCardArgs.map((cardArgs, index) => (
        <EventСard key={index} {...cardArgs}/>
      ))}
    </>
  );
};
const TemplateOneCard: ComponentStory<typeof EventСard> = (args) => {
  return (
    <>
      {oneCard.map((cardArgs, index) => (
        <EventСard key={index} {...cardArgs}/>
      ))}
    </>
  );
};

export const Event_One_Сard = TemplateOneCard.bind({});
Event_One_Сard.args = {
  image:
    'https://images.unsplash.com/photo-1621636723658-a062df4cbb2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  time: '13:00',
  location: 'Площадка «8/3»',
  title: 'Что я узнал',
  description: 'Гости расскажут о своём творческом и организационном опыте.',
  playwright: 'Ольга Казакова',
  director: 'Катя Ганюшина',
  button: true,
};


export const Event_Сard = Template.bind({});
Event_Сard.args = {
  image:
    'https://images.unsplash.com/photo-1621636723658-a062df4cbb2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  time: '13:00',
  location: 'Площадка «8/3»',
  title: 'Что я узнал',
  description: 'Гости расскажут о своём творческом и организационном опыте.',
  playwright: 'Ольга Казакова',
  director: 'Катя Ганюшина',
  button: true,
};
