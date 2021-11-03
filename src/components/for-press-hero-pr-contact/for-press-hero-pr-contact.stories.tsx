import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ForPressHeroPrContact } from './for-press-hero-pr-contact';
import mockData from './assets/mock-data.json';

export default {
  title: 'Components/ForPressHeroPrContact',
  component: ForPressHeroPrContact,

} as ComponentMeta<typeof ForPressHeroPrContact>;

const Template: ComponentStory<typeof ForPressHeroPrContact> = (args) => {
  return <ForPressHeroPrContact {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  data: mockData,
};
