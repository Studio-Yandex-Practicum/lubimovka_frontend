import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ForPressHeroTitle } from './for-press-hero-title';
import mockData from './assets/mock-data.json';

export default {
  title: 'Components/ForPressHeroTitle',
  component: ForPressHeroTitle,

} as ComponentMeta<typeof ForPressHeroTitle>;

const Template: ComponentStory<typeof ForPressHeroTitle> = (args) => {
  return <ForPressHeroTitle {...args}/>;
};

export const Default = Template.bind({});

Default.args = {
  data: mockData,
};
