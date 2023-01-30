import React from 'react';

import { Button } from './button';
import { Icon } from '../icon';

import type { ComponentMeta,ComponentStory } from '@storybook/react';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Default = Template.bind({});
Default.args = {
  children: 'Кнопка',
  icon: (
    <Icon
      glyph="comment"
      width="100%"
      height="100%"
    />
  ),
  type: 'button',
};
