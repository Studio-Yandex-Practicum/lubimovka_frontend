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
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: 2020,
    readingUrl: 'https://lubimovka.ru/',
    downloadUrl: 'https://lubimovka.ru/',
    authors: [{
      slug: 'Ekaterina_Avgustenyak',
      name: 'Екатерина Августеняк',
    }],
  },
};

export const PlayCardWithMultipleAuthors = Template.bind({});
PlayCardWithMultipleAuthors.args = {
  play: {
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: 2020,
    readingUrl: 'https://lubimovka.ru/',
    downloadUrl: 'https://lubimovka.ru/',
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
};

export const PlayCardWithVisibleButtons = Template.bind({});
PlayCardWithVisibleButtons.args = {
  play: {
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: 2020,
    readingUrl: 'https://lubimovka.ru/',
    downloadUrl: 'https://lubimovka.ru/',
    authors: [{
      slug: 'Ekaterina_Avgustenyak',
      name: 'Екатерина Августеняк',
    }],
  },
};

export const PlayCardWithHiddenCityAndYear = Template.bind({});
PlayCardWithHiddenCityAndYear.args = {
  play: {
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    readingUrl: 'https://lubimovka.ru/',
    downloadUrl: 'https://lubimovka.ru/',
    authors: [{
      slug: 'Ekaterina_Avgustenyak',
      name: 'Екатерина Августеняк',
    }],
  },
};
