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
  festival:false,
  date:'15 декабря',
  time: '11:00',
  title: 'МАМА',
  playwrightArray: ['Ольга Казакова', 'Антон Чехов'],
  directorArray: ['Катя Ганюшина'],
  buttonLinks: ['https://lubimovka.timepad.ru/event/1746579/', 'https://lubimovka.timepad.ru/event/1746502/'],
  coverResourceUrl: 'https://lubimovka.ru/images/production/mama_site.jpg',
};

export const PlayCardEventsViewOneButton = Template.bind({});
PlayCardEventsViewOneButton.args = {
  festival:false,
  date:'15 декабря',
  time: '11:00',
  title: 'МАМА',
  playwrightArray: ['Ольга Казакова', 'Антон Чехов'],
  directorArray: ['Катя Ганюшина'],
  buttonLinks: ['https://lubimovka.timepad.ru/event/1746579/'],
  coverResourceUrl: 'https://lubimovka.ru/images/production/mama_site.jpg',
};

export const PlayCardFestivalView = Template.bind({});
PlayCardFestivalView.args = {
  festival:true,
  time: '13:00',
  location: 'Площадка «8/3»',
  title: 'Камино норте',
  synopsis: '(Не)деликатная пьеса о психоневрологическом интернате',
  playwrightArray: ['Ольга Казакова'],
  directorArray: ['Катя Ганюшина'],
  buttonLinks: ['https://lubimovka.timepad.ru/event/1746579/'],
  coverResourceUrl: 'https://lubimovka.ru/images/7_.jpg',
};

export const PlayCardFestivalViewNoRegistration = Template.bind({});
PlayCardFestivalViewNoRegistration.args = {
  festival:true,
  time: '13:00',
  location: 'Площадка «8/3»',
  title: 'Камино норте',
  synopsis: '(Не)деликатная пьеса о психоневрологическом интернате',
  playwrightArray: ['Ольга Казакова'],
  directorArray: ['Катя Ганюшина'],
  buttonLinks: [],
  coverResourceUrl: 'https://lubimovka.ru/images/7_.jpg',
};
