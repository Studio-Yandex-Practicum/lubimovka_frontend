import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PlayCard } from './play-card';

export default {
  title: 'Components/PlayCard',
  component: PlayCard,
} as ComponentMeta<typeof PlayCard>;

const Template: ComponentStory<typeof PlayCard> = (args) => <PlayCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  play: {
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: 2020,
    readingUrl: '#',
    downloadUrl: '#',
    authors: [{
      slug: 'Ekaterina_Avgustenyak',
      name: 'Екатерина Августеняк',
    }],
  },
};
