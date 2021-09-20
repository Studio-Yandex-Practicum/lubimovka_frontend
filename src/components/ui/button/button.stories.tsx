import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './button';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Projects = Template.bind({});
Projects.args = {
  icon: 'arrow-left',
  label: 'Проекты',
  border: 'border-bottom-right',
  iconPlace: 'icon-place-right',
};

export const ShowMore = Template.bind({});
ShowMore.args = {
  size: 'm',
  icon: 'arrow-down',
  label: 'Показать ещё',
  border: 'border-top-left',
  iconPlace: 'icon-place-right',
};

export const Minimize = Template.bind({});
Minimize.args = {
  size: 'm',
  icon: 'arrow-up',
  label: 'Свернуть',
  border: 'border-top-left',
  iconPlace: 'icon-place-right',
};

export const AboutShowArrowDown = Template.bind({});
AboutShowArrowDown.args = {
  size: 'm',
  icon: 'arrow-down',
  label: 'О спектакле',
  border: 'border-bottom-left',
  iconPlace: 'icon-place-right',
};

export const AboutShowArrowRight = Template.bind({});
AboutShowArrowRight.args = {
  size: 'm',
  icon: 'arrow-right',
  label: 'О спектакле',
  border: 'border-bottom-left',
  iconPlace: 'icon-place-left',
};

export const AddFile = Template.bind({});
AddFile.args = {
  icon: 'plus',
  label: 'Добавить файл',
  border: 'border-bottom-left',
  iconPlace: 'icon-place-left',
};

export const Download = Template.bind({});
Download.args = {
  icon: 'arrow-down',
  label: 'Скачать',
  border: 'border-none',
  iconPlace: 'icon-place-right',
};

export const DownloadPlay = Template.bind({});
DownloadPlay.args = {
  size: 'l',
  accent: true,
  icon: 'arrow-down',
  label: 'Скачать пьесу',
  border: 'border-top',
  iconPlace: 'icon-place-right',
};

export const LookReading = Template.bind({});
LookReading.args = {
  size: 'l',
  accent: true,
  icon: 'arrow-45',
  label: 'Скачать пьесу',
  border: 'border-top',
  iconPlace: 'icon-place-right',
};

export const Send = Template.bind({});
Send.args = {
  size: 'l',
  accent: false,
  icon: 'arrow-right',
  label: 'Скачать пьесу',
  border: 'border-full',
  iconPlace: 'icon-place-right',
};


