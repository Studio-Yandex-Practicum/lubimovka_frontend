import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AnnouncedPlayCard } from './announced-play-card';

export default {
  title: 'UI/AnnouncedPlayCard',
  component: AnnouncedPlayCard,

} as ComponentMeta<typeof AnnouncedPlayCard>;

const Template: ComponentStory<typeof AnnouncedPlayCard> = (args) => <AnnouncedPlayCard {...args} />;

export const PlayCardEventsViewTwoButtons = Template.bind({});
PlayCardEventsViewTwoButtons.args = {
  date:'15 декабря',
  time: '11:00',
  title: 'МАМА',
  playwrightArray: ['Ольга Казакова', 'Антон Чехов'],
  directorArray: ['Катя Ганюшина'],
  buttonLinks: ['https://lubimovka.timepad.ru/event/1746579/', 'https://lubimovka.timepad.ru/event/1746502/'],
  coverResourceUrl: 'https://img05.rl0.ru/afisha/1808x1016q65i/s2.afisha.ru/mediastorage/5e/c5/541412eb0ea14286bad43d20c55e.jpg',
};

export const PlayCardEventsViewOneButton = Template.bind({});
PlayCardEventsViewOneButton.args = {
  date:'15 декабря',
  time: '11:00',
  title: 'МАМА',
  playwrightArray: ['Ольга Казакова', 'Антон Чехов'],
  directorArray: ['Катя Ганюшина'],
  buttonLinks: ['https://lubimovka.timepad.ru/event/1746579/'],
  coverResourceUrl: 'https://img05.rl0.ru/afisha/1808x1016q65i/s2.afisha.ru/mediastorage/5e/c5/541412eb0ea14286bad43d20c55e.jpg',
};

export const PlayCardEventsViewTwoButtonsNoCover = Template.bind({});
PlayCardEventsViewTwoButtonsNoCover.args = {
  date:'15 декабря',
  time: '11:00',
  title: 'МАМА',
  playwrightArray: ['Ольга Казакова', 'Антон Чехов'],
  directorArray: ['Катя Ганюшина'],
  buttonLinks: ['https://lubimovka.timepad.ru/event/1746579/', 'https://lubimovka.timepad.ru/event/1746502/'],
};

export const PlayCardEventsViewOneButtonNoCover = Template.bind({});
PlayCardEventsViewOneButtonNoCover.args = {
  date:'15 декабря',
  time: '11:00',
  title: 'МАМА',
  playwrightArray: ['Ольга Казакова', 'Антон Чехов'],
  directorArray: ['Катя Ганюшина'],
  buttonLinks: ['https://lubimovka.timepad.ru/event/1746579/'],
};

export const PlayCardEventsViewNoCredits = Template.bind({});
PlayCardEventsViewNoCredits.args = {
  date:'15 декабря',
  time: '11:00',
  title: 'Что я узнал о творчестве благодаря драматургам',
  playwrightArray: [],
  directorArray: [],
  eventDescription: 'Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.',
  buttonLinks: ['https://lubimovka.timepad.ru/event/1746579/'],
};
