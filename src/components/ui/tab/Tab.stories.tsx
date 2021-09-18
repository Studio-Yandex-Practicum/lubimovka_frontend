import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tab } from './Tab';

export default {
  title: 'Example/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'l',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
};
