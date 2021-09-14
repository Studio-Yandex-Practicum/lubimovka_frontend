import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BodyText } from './Body-text';

export default {
  title: 'Text/Body text',
  component: BodyText
} as ComponentMeta<typeof BodyText>;

const Template: ComponentStory<typeof BodyText> = (args) => <BodyText {...args} />;

export const BodyText_large = Template.bind({});
BodyText_large.args = {
  size: 'large',
  text: 'Body text large',
};

export const BodyText_medium = Template.bind({});
BodyText_medium.args = {
  size: 'medium',
  text: 'Body text medium',
};

export const BodyText_small = Template.bind({});
BodyText_small.args = {
  size: 'small',
  text: 'Body text small',
};

export const BodyText_caption = Template.bind({});
BodyText_caption.args = {
  size: 'caption',
  text: 'Caption text',
};
