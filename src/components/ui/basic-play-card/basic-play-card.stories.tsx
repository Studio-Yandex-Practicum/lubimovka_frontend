import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasicPlayCard } from './basic-play-card';

export default {
  title: 'UI/BasicPlayCard',
  component: BasicPlayCard,
  decorators: [
    (Story) => (
      <div style={{ width: '240px', height: '412px'}}>
        <Story/>
      </div>
    ),
  ],

} as ComponentMeta<typeof BasicPlayCard>;

const Template: ComponentStory<typeof BasicPlayCard> = (args) => <BasicPlayCard {...args} />;

export const DefaultPlayCard = Template.bind({});
DefaultPlayCard.args = {
  play: {
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: '2020',
    linkView: 'https://lubimovka.ru/',
    linkDownload: 'https://lubimovka.ru/',
  },
  author: {
    id: 1,
    name: 'Екатерина Августеняк',
  },
  buttonVisibility: false,
};

export const PlayCardWithVisibleButtons = Template.bind({});
PlayCardWithVisibleButtons.args = {
  play: {
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: '2020',
    linkView: 'https://lubimovka.ru/',
    linkDownload: 'https://lubimovka.ru/',
  },
  author: {
    id: 1,
    name: 'Екатерина Августеняк',
  },
  buttonVisibility: true,
};
