import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuItem } from './menu-item';

export default {
  title: 'UI/MenuItem',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Афиша',
  href: '#',
  active: true,
  size: 'l',
};
