import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasicPlayCard } from './basic-play-card';

export default {
  title: 'UI/BasicPlayCard',
  component: BasicPlayCard,

} as ComponentMeta<typeof BasicPlayCard>;

const Template: ComponentStory<typeof BasicPlayCard> = (args) => <BasicPlayCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Конкретные разговоры пожилых супругов ни о чём',
  authorFirstName: 'Екатерина',
  authorLastName: 'Августеняк',
  city: 'Санкт-Петербург',
  year: '2020',
};
