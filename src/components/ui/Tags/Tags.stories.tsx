import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tags } from './tags';

export default {
  title: 'Example/Tags',
  component: Tags,
} as ComponentMeta<typeof Tags>;

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

export const Example = Template.bind({});
Example.args = {
  label: 'внеконкурсная программа'
};
