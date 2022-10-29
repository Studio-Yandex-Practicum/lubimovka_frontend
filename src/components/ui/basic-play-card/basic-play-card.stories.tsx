import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasicPlayCard } from './basic-play-card';

export default {
  title: 'Components/BasicPlayCard',
  component: BasicPlayCard,
} as ComponentMeta<typeof BasicPlayCard>;

const Template: ComponentStory<typeof BasicPlayCard> = (args) => <BasicPlayCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
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
