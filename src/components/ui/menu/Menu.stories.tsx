import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Menu } from './Menu';

export default {
  title: 'Example/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'l',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
};
