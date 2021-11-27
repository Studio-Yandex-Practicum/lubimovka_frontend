import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ForPressHeroDescription } from './for-press-hero-description';

import mockData from './assets/mock-data.json';

export default {
  title: 'Components/ForPressHeroDescription',
  component: ForPressHeroDescription,

} as ComponentMeta<typeof ForPressHeroDescription>;

const Template: ComponentStory<typeof ForPressHeroDescription> = (args) => {
  return <ForPressHeroDescription {...args}/>;
};

export const Default = Template.bind({});

Default.args = {
  data: mockData,
};
