import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AnnouncedPlayCard } from './announced-play-card';

export default {
  title: 'UI/AnnouncedPlayCard',
  component: AnnouncedPlayCard,

} as ComponentMeta<typeof AnnouncedPlayCard>;

const Template: ComponentStory<typeof AnnouncedPlayCard> = (args) => <AnnouncedPlayCard {...args} />;

export const PlayCardEventsView = Template.bind({});
PlayCardEventsView.args = {
  festival:false,
  date:'15 декабря',
  time: '11:00',
  title: 'МАМА',
  playwright: 'Ольга Казакова,Антон Чехов',
  director: 'Катя Ганюшина',
  buttonData: [ { buttonName: 'Билеты', buttonLink: 'https://lubimovka.ru/'},
    { buttonName: 'О спектакле', buttonLink: 'https://lubimovka.ru/'},
  ],
  coverResourceUrl: 'https://lubimovka.ru/images/production/mama_site.jpg',
};

export const PlayCardFestivalView = Template.bind({});
PlayCardFestivalView.args = {
  festival:true,
  time: '13:00',
  location: 'Площадка «8/3»',
  title: 'Камино норте',
  synopsis: '(Не)деликатная пьеса о психоневрологическом интернате',
  playwright: 'Ольга Казакова',
  director: 'Катя Ганюшина',
  buttonData: [{buttonName: 'Регистрация', buttonLink: 'https://lubimovka.ru/'}],
  coverResourceUrl: 'https://lubimovka.ru/images/7_.jpg',
};
