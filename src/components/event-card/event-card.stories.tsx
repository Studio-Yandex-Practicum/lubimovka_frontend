import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EventCard } from './event-card';

export default {
  title: 'Components/EventCard',
  component: EventCard,
} as ComponentMeta<typeof EventCard>;

const Template: ComponentStory<typeof EventCard> = (args) => <EventCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  image: 'https://source.unsplash.com/random',
  time: '13:00',
  location: 'Площадка «8/3»',
  title: 'Камино норте',
  description: '(Не)деликатная пьеса о психоневрологическом интернате',
  playwright: 'Ольга Казакова',
  director: 'Катя Ганюшина',
  registrationUrl: '#',
};
