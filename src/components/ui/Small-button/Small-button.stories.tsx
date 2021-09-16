import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SmallButton from './Small-button';

export default {
  title: 'Small button',
  component: SmallButton,
} as ComponentMeta<typeof SmallButton>;

const Template: ComponentStory<typeof SmallButton> = (args) => <SmallButton {...args} />;

export const Projects = Template.bind({});
Projects.args = {
  fixedSize: false,
  icon: 'icon-arrow-left',
  label: 'Проекты',
  border: 'border-bottom-right',
  iconPlace: 'icon-place-right',
};

export const ShowMore = Template.bind({});
ShowMore.args = {
  size: 'l',
  icon: 'icon-arrow-down',
  label: 'Показать ещё',
  border: 'border-top-left',
  iconPlace: 'icon-place-right',
};

export const Minimize = Template.bind({});
Minimize.args = {
  size: 'l',
  icon: 'icon-arrow-up',
  label: 'Свернуть',
  border: 'border-top-left',
  iconPlace: 'icon-place-right',
};

export const AboutShowArrowDown = Template.bind({});
AboutShowArrowDown.args = {
  size: 'm',
  icon: 'icon-arrow-down',
  label: 'О спектакле',
  border: 'border-bottom-left',
  iconPlace: 'icon-place-right',
};

export const AboutShowArrowRight = Template.bind({});
AboutShowArrowRight.args = {
  size: 'm',
  icon: 'icon-arrow-right',
  label: 'О спектакле',
  border: 'border-bottom-left',
  iconPlace: 'icon-place-left',
};

export const AddFile = Template.bind({});
AddFile.args = {
  icon: 'icon-plus',
  label: 'Добавить файл',
  border: 'border-bottom-left',
  iconPlace: 'icon-place-left',
};

export const Download = Template.bind({});
Download.args = {
  icon: 'icon-arrow-down',
  label: 'Скачать',
  border: 'border-none',
  iconPlace: 'icon-place-right',
};
