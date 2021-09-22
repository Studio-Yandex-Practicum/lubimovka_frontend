import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';
import { Icon } from '../icon';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Projects = Template.bind({});
Projects.args = {
  rightAddon: <Icon glyph="arrow-left" />,
  label: 'Проекты',
  border: 'bottomRight',
  iconPlace: 'right',

};

export const ShowMore = Template.bind({});
ShowMore.args = {
  size: 'm',
  rightAddon:  <Icon glyph="arrow-down" />,
  label: 'Показать ещё',
  border: 'topLeft',
};

export const Minimize = Template.bind({});
Minimize.args = {
  size: 'm',
  rightAddon:  <Icon glyph="arrow-up" />,
  label: 'Свернуть',
  border: 'topLeft',
};

export const AboutShowArrowDown = Template.bind({});
AboutShowArrowDown.args = {
  size: 's',
  rightAddon: <Icon glyph="arrow-down" />,
  label: 'О спектакле',
  border: 'bottomLeft',
};

export const AboutShowArrowRight = Template.bind({});
AboutShowArrowRight.args = {
  size: 's',
  leftAddon: <Icon glyph="arrow-right"  />,
  label: 'О спектакле',
  border: 'bottomLeft',
};

export const AddFile = Template.bind({});
AddFile.args = {
  leftAddon:  <Icon glyph="plus" />,
  label: 'Добавить файл',
  border: 'bottomLeft',
};

export const Download = Template.bind({});
Download.args = {
  rightAddon:  <Icon glyph="arrow-down" />,
  view: 'transparent',
  label: 'Скачать',
  border: 'none',
};

export const DownloadPlay = Template.bind({});
DownloadPlay.args = {
  size: 'l',
  view: 'primary',
  rightAddon: <Icon glyph="arrow-down" />,
  label: 'Скачать пьесу',
  border: 'top',
};

export const LookReading = Template.bind({});
LookReading.args = {
  size: 'l',
  view: 'secondary',
  rightAddon: <Icon glyph="arrow-45" />,
  label: 'Смотреть читку',
  border: 'top',
};

export const Send = Template.bind({});
Send.args = {
  size: 'l',
  view: 'transparent',
  rightAddon: <Icon glyph="arrow-right" />,
  label: 'Отправить',
  border: 'full',
};
