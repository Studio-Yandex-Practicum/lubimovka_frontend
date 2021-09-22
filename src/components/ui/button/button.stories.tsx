import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Projects = Template.bind({});
Projects.args = {
  icon: 'arrow-left',
  label: 'Проекты',
  border: 'bottomRight',
  iconPlace: 'right',
};

export const ShowMore = Template.bind({});
ShowMore.args = {
  size: 'm',
  icon: 'arrow-down',
  label: 'Показать ещё',
  border: 'topLeft',
  iconPlace: 'right',
};

export const Minimize = Template.bind({});
Minimize.args = {
  size: 'm',
  icon: 'arrow-up',
  label: 'Свернуть',
  border: 'topLeft',
  iconPlace: 'right',
};

export const AboutShowArrowDown = Template.bind({});
AboutShowArrowDown.args = {
  size: 's',
  icon: 'arrow-down',
  label: 'О спектакле',
  border: 'bottomLeft',
  iconPlace: 'right',
};

export const AboutShowArrowRight = Template.bind({});
AboutShowArrowRight.args = {
  size: 's',
  icon: 'arrow-right',
  label: 'О спектакле',
  border: 'bottomLeft',
  iconPlace: 'left',
};

export const AddFile = Template.bind({});
AddFile.args = {
  icon: 'plus',
  label: 'Добавить файл',
  border: 'bottomLeft',
  iconPlace: 'left',
};

export const Download = Template.bind({});
Download.args = {
  icon: 'arrow-down',
  label: 'Скачать',
  border: 'none',
  iconPlace: 'right',
};

export const DownloadPlay = Template.bind({});
DownloadPlay.args = {
  size: 'l',
  view: 'secondary',
  icon: 'arrow-down',
  label: 'Скачать пьесу',
  border: 'top',
  iconPlace: 'right',
};

export const LookReading = Template.bind({});
LookReading.args = {
  size: 'l',
  view: 'secondary',
  icon: 'arrow-45',
  label: 'Смотреть читку',
  border: 'top',
  iconPlace: 'right',
};

export const Send = Template.bind({});
Send.args = {
  size: 'l',
  view: 'primary',
  icon: 'arrow-right',
  label: 'Отправить',
  border: 'full',
  iconPlace: 'right',
};


