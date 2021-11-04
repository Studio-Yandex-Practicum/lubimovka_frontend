import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasicPlayCard } from './basic-play-card';

export default {
  title: 'UI/BasicPlayCard',
  component: BasicPlayCard,
  decorators: [
    (Story) => (
      <div style={{ width: '240px'}}>
        <Story/>
      </div>
    ),
  ],

} as ComponentMeta<typeof BasicPlayCard>;

const Template: ComponentStory<typeof BasicPlayCard> = (args) => <BasicPlayCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  play: {
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: '2020',
    linkView: 'https://lubimovka.ru/',
    linkDownload: 'https://lubimovka.ru/',
  },
  authors: [{
    id: 1,
    name: 'Екатерина Августеняк',
  }],
  buttonVisibility: false,
};

export const PlayCardWithMultipleAuthors = Template.bind({});
PlayCardWithMultipleAuthors.args = {
  play: {
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: '2020',
    linkView: 'https://lubimovka.ru/',
    linkDownload: 'https://lubimovka.ru/',
  },
  authors: [
    {
      id: 1,
      name: 'Екатерина Августеняк',
    },
    {
      id: 2,
      name: 'Антон Чехов',
    },
    {
      id: 3,
      name: 'Василий Косотрясов',
    },
  ],
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
  authors: [{
    id: 1,
    name: 'Екатерина Августеняк',
  }],
  buttonVisibility: true,
};
