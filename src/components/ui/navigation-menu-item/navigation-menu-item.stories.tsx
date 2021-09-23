import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavigationMenuItem } from './navigation-menu-item';

export default {
  title: 'UI/NavigationMenuItem',
  component: NavigationMenuItem,
} as ComponentMeta<typeof NavigationMenuItem>;

const Template: ComponentStory<typeof NavigationMenuItem> = (args) => <NavigationMenuItem {...args} />;

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
