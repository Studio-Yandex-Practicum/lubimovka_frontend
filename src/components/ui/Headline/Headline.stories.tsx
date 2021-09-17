import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Headline } from './headline';

export default {
  title: 'Text/Headline',
  component: Headline
} as ComponentMeta<typeof Headline>;

const Template: ComponentStory<typeof Headline> = (args) => <Headline {...args} />;

export const Headline_1 = Template.bind({});
Headline_1.args = {
  level: 1,
  children: 'Headline 1',
};

export const Headline_2 = Template.bind({});
Headline_2.args = {
  level: 2,
  children: 'Headline 2',
};

export const Headline_3 = Template.bind({});
Headline_3.args = {
  level: 3,
  children: 'Headline 3',
};

export const Headline_4 = Template.bind({});
Headline_4.args = {
  level: 4,
  children: 'Headline 4',
};

export const Headline_5 = Template.bind({});
Headline_5.args = {
  level: 5,
  children: 'Headline 5',
};

export const Headline_6 = Template.bind({});
Headline_6.args = {
  level: 6,
  children: 'Headline 6',
};

export const Headline_7 = Template.bind({});
Headline_7.args = {
  level: 7,
  children: 'Headline 7',
};
