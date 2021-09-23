import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuItem } from './menu-item';

export default {
  title: 'UI/MenuItem',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  title: 'Библиотека',
  href: '#',
};

export const Large = Template.bind({});
Large.args = {
  title: 'Авторы',
  href: '#',
  size: 'l',
};

export const Inactive = Template.bind({});
Inactive.args = {
  title: 'Авторы',
  href: '#',
  inactive: true,
  size: 'l',
};
