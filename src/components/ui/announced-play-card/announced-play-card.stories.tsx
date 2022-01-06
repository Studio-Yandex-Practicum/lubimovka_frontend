import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AnnouncedPlayCard } from './announced-play-card';

export default {
  title: 'UI/AnnouncedPlayCard',
  component: AnnouncedPlayCard,
  parameters: {
    layout: 'fullscreen',
  },

} as ComponentMeta<typeof AnnouncedPlayCard>;

const Template: ComponentStory<typeof AnnouncedPlayCard> = (args) => <AnnouncedPlayCard {...args}/>;

export const PerformancePaid = Template.bind({});
PerformancePaid.args = {
  isPerformance: true,
  id: 1,
  date:'2021-11-13T17:00:00.000Z',
  title: 'МАМА',
  team: [
    {
      name: 'Драматурги',
      persons: ['Ольга Казакова', 'Антон Чехов']
    },
    {
      name: 'Режиссёр',
      persons: ['Катя Ганюшина']
    },
  ],
  buttonLink: 'https://lubimovka.timepad.ru/event/1746579/',
  imageUrl: 'https://img05.rl0.ru/afisha/1808x1016q65i/s2.afisha.ru/mediastorage/5e/c5/541412eb0ea14286bad43d20c55e.jpg',
  projectText: 'читка проекта Любимовка.Ещё',
  paid: true,
};

export const PerformancePaidWithDescription = Template.bind({});
PerformancePaidWithDescription.args = {
  isPerformance: true,
  id: 1,
  date:'2021-11-13T17:00:00.000Z',
  title: 'МАМА',
  team: [
    {
      name: 'Драматурги',
      persons: ['Ольга Казакова', 'Антон Чехов']
    },
    {
      name: 'Режиссёр',
      persons: ['Катя Ганюшина']
    },
  ],
  description: 'Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.',
  buttonLink: 'https://lubimovka.timepad.ru/event/1746579/',
  imageUrl: 'https://img05.rl0.ru/afisha/1808x1016q65i/s2.afisha.ru/mediastorage/5e/c5/541412eb0ea14286bad43d20c55e.jpg',
  projectText: 'читка проекта Любимовка.Ещё',
  paid: true,
};

export const PerformanceNoTickets = Template.bind({});
PerformanceNoTickets.args = {
  isPerformance: true,
  id: 1,
  date:'2021-11-13T17:00:00.000Z',
  title: 'МАМА',
  team: [
    {
      name: 'Драматурги',
      persons: ['Ольга Казакова', 'Антон Чехов']
    },
    {
      name: 'Режиссёр',
      persons: ['Катя Ганюшина']
    },
  ],
  buttonLink: 'https://lubimovka.timepad.ru/event/1746579/',
  imageUrl: 'https://img05.rl0.ru/afisha/1808x1016q65i/s2.afisha.ru/mediastorage/5e/c5/541412eb0ea14286bad43d20c55e.jpg',
  projectText: 'читка проекта Любимовка.Ещё',
  paid: false,
};

export const PerformancePaidNoCover = Template.bind({});
PerformancePaidNoCover.args = {
  isPerformance: true,
  id: 1,
  date:'2021-11-13T17:00:00.000Z',
  title: 'МАМА',
  team: [
    {
      name: 'Драматурги',
      persons: ['Ольга Казакова', 'Антон Чехов']
    },
    {
      name: 'Режиссёр',
      persons: ['Катя Ганюшина']
    },
  ],
  buttonLink: 'https://lubimovka.timepad.ru/event/1746579/',
  projectText: 'читка проекта Любимовка.Ещё',
  paid: true,
};

export const PerformanceNotPaidNoCover = Template.bind({});
PerformanceNotPaidNoCover.args = {
  isPerformance: true,
  id: 1,
  date:'2021-11-13T17:00:00.000Z',
  title: 'Коммуналка на Петроградской',
  team: [
    {
      name: 'Драматурги',
      persons: ['Ольга Казакова', 'Антон Чехов']
    },
    {
      name: 'Режиссёр',
      persons: ['Катя Ганюшина']
    },
  ],
  buttonLink: 'https://lubimovka.timepad.ru/event/1746579/',
  projectText: 'читка проекта Любимовка.Ещё',
  paid: false,
};

export const ReadingNoCredits = Template.bind({});
ReadingNoCredits.args = {
  isPerformance: true,
  id: 1,
  date:'2021-11-13T17:00:00.000Z',
  title: 'Что я узнал о творчестве благодаря драматургам',
  team: [],
  description: 'Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.',
  buttonLink: 'https://lubimovka.timepad.ru/event/1746579/',
  projectText: 'читка проекта Любимовка.Ещё',
  paid: false,
};

export const ReadingWithCredits = Template.bind({});
ReadingWithCredits.args = {
  isPerformance: true,
  id: 1,
  date:'2021-11-13T17:00:00.000Z',
  title: 'Коммуналка на Петроградской',
  team: [
    {
      name: 'Драматурги',
      persons: ['Ольга Казакова', 'Антон Чехов']
    },
    {
      name: 'Режиссёр',
      persons: ['Катя Ганюшина']
    },
  ],
  description: 'Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.',
  buttonLink: 'https://lubimovka.timepad.ru/event/1746579/',
  projectText: 'читка проекта Любимовка.Ещё',
  paid: false,
};

export const ReadingWithCreditsNoProject = Template.bind({});
ReadingWithCreditsNoProject.args = {
  isPerformance: true,
  id: 1,
  date:'2021-11-13T17:00:00.000Z',
  title: 'Коммуналка на Петроградской',
  team: [
    {
      name: 'Драматурги',
      persons: ['Ольга Казакова', 'Антон Чехов']
    },
    {
      name: 'Режиссёр',
      persons: ['Катя Ганюшина']
    },
  ],
  description: 'Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.',
  buttonLink: 'https://lubimovka.timepad.ru/event/1746579/',
  projectText: null,
  paid: false,
};
