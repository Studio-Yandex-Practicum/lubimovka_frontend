import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Projects = Template.bind({});
Projects.args = {
  size: 's',
  iconPlace: 'right',
  icon: 'arrow-left',
  label: 'Проекты',
  border: 'bottomRight',
};

export const ShowMore = Template.bind({});
ShowMore.args = {
  width: '210px',
  size: 's',
  iconPlace: 'right',
  icon: 'arrow-down',
  label: 'Показать ещё',
  border: 'topLeft',
};

export const Minimize = Template.bind({});
Minimize.args = {
  width: '210px',
  size: 's',
  iconPlace: 'right',
  icon: 'arrow-up',
  label: 'Свернуть',
  border: 'topLeft',
};

export const AboutShowArrowDown = Template.bind({});
AboutShowArrowDown.args = {
  width: '155px',
  size: 's',
  iconPlace: 'right',
  icon: 'arrow-down',
  label: 'О спектакле',
  border: 'bottomLeft',
};

export const AboutShowArrowRight = Template.bind({});
AboutShowArrowRight.args = {
  width: '154px',
  size: 's',
  iconPlace: 'left',
  icon: 'arrow-right',
  label: 'О спектакле',
  border: 'bottomLeft',
};

export const AddFile = Template.bind({});
AddFile.args = {
  size: 's',
  iconPlace: 'left',
  icon: 'plus',
  label: 'Добавить файл',
  border: 'bottomLeft',
};

export const Download = Template.bind({});
Download.args = {
  size: 's',
  iconPlace: 'right',
  icon: 'arrow-down',
  label: 'Скачать',
  border: 'none',
};

export const DownloadPlay = Template.bind({});
DownloadPlay.args = {
  width: '240px',
  size: 'l',
  view: 'secondary',
  iconPlace: 'right',
  icon: 'arrow-down',
  label: 'Скачать пьесу',
  border: 'top',
};

export const LookReading = Template.bind({});
LookReading.args = {
  width: '240px',
  size: 'l',
  view: 'secondary',
  iconPlace: 'right',
  icon: 'arrow-45',
  label: 'Смотреть читку',
  border: 'top',
};

export const Send = Template.bind({});
Send.args = {
  width: '240px',
  size: 'l',
  iconPlace: 'right',
  icon: 'arrow-right',
  label: 'Отправить',
  border: 'full',
};

export const FormButtonDisabled = Template.bind({});
FormButtonDisabled.args = {
  width: '360px',
  size: 'l',
  iconPlace: 'right',
  icon: 'ok',
  label: 'Отправлено',
  border: 'full',
  disabled: true,
};

export const BackButton_Link = Template.bind({});
BackButton_Link.args = {
  size: 's',
  iconPlace: 'right',
  icon: 'arrow-left',
  label: 'Бибилиотека',
  border: 'bottomRight',
  isLink: true,
};

export const Tickets = Template.bind({});
Tickets.args = {
  size: 's',
  iconPlace: 'left',
  icon: 'arrow-right',
  label: 'Билеты',
  border: 'bottomLeft',
  isLink: true,
  align: 'start',
  gap: '9px',
  width: '154px',
};

export const Support = Template.bind({});
Support.args = {
  label: 'Поддержать',
  view: 'primary',
  icon: 'plus',
  iconPlace: 'left',
  isLink: true,
  align: 'center',
  width: '165px',
};
