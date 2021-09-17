import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BodyText } from './body-text';

export default {
  title: 'Text/Body text',
  component: BodyText
} as ComponentMeta<typeof BodyText>;

const Template: ComponentStory<typeof BodyText> = (args) => <BodyText {...args} />;

export const BodyText_large = Template.bind({});
BodyText_large.args = {
  size: 'large',
  children: 'Body text',
};

export const BodyText_medium = Template.bind({});
BodyText_medium.args = {
  size: 'medium',
  children: 'Body text medium',
};

export const BodyText_small = Template.bind({});
BodyText_small.args = {
  size: 'small',
  children: 'Body text small',
};

export const BodyText_caption = Template.bind({});
BodyText_caption.args = {
  size: 'caption',
  children: 'Caption text',
};
