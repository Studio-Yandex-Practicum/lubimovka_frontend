import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BigButton from './Big-button';

export default {
  title: 'Big button',
  component: BigButton,
} as ComponentMeta<typeof BigButton>;

const Template: ComponentStory<typeof BigButton> = (args) => <BigButton {...args} />;

export const Accent = Template.bind({});
Accent.args = {
  isAccent: true,
  arrow: 'arrow-diagonal',
  label: 'Смотреть читку',
  border: 'border-top',
};

export const AccentArrowDown = Template.bind({});
AccentArrowDown.args = {
  isAccent: true,
  arrow: 'arrow-down',
  label: 'Скачать пьесу',
  border: 'border-top',
};


export const Usual = Template.bind({});
Usual.args = {
  arrow: 'arrow-right',
  label: 'Отправить',
  border: 'border-full',
};
