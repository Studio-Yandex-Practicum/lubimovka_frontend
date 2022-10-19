import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';
import { Icon } from '../icon';

export default {
  title: 'UI/Button2',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Default = Template.bind({});
Default.args = {
  icon: <Icon glyph="ok"/>
};
