import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasicPlayCard } from './basic-play-card';

export default {
  title: 'UI/BasicPlayCard',
  component: BasicPlayCard,
} as ComponentMeta<typeof BasicPlayCard>;

const Template: ComponentStory<typeof BasicPlayCard> = (args) => <BasicPlayCard {...args}/>;

export const CardDefault = Template.bind({});
CardDefault.args = {
  play: {
    id: 1,
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: 2020,
    linkView: 'https://lubimovka.ru/',
    linkDownload: 'https://lubimovka.ru/',
    authors: [{
      slug: 'Ekaterina_Avgustenyak',
      name: 'Екатерина Августеняк',
    }],
  },
  buttonVisibility: false,
};

export const PlayCardWithMultipleAuthors = Template.bind({});
PlayCardWithMultipleAuthors.args = {
  play: {
    id: 2,
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: 2020,
    linkView: 'https://lubimovka.ru/',
    linkDownload: 'https://lubimovka.ru/',
    authors: [
      {
        slug: 'Ekaterina_Avgustenyak',
        name: 'Екатерина Августеняк',
      },
      {
        slug: 'Anton_Chehov',
        name: 'Антон Чехов',
      },
      {
        slug: 'Vasiliy_Kostryakov',
        name: 'Василий Косотрясов',
      },
    ],
  },
  buttonVisibility: false,
};

export const PlayCardWithVisibleButtons = Template.bind({});
PlayCardWithVisibleButtons.args = {
  play: {
    id: 3,
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: 2020,
    linkView: 'https://lubimovka.ru/',
    linkDownload: 'https://lubimovka.ru/',
    authors: [{
      slug: 'Ekaterina_Avgustenyak',
      name: 'Екатерина Августеняк',
    }],
  },
  buttonVisibility: true,
};

export const PlayCardWithHiddenCityAndYear = Template.bind({});
PlayCardWithHiddenCityAndYear.args = {
  play: {
    id: 3,
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    linkView: 'https://lubimovka.ru/',
    linkDownload: 'https://lubimovka.ru/',
    authors: [{
      slug: 'Ekaterina_Avgustenyak',
      name: 'Екатерина Августеняк',
    }],
  },
  buttonVisibility: false,
};
