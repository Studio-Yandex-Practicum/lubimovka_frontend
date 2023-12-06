import { Icon } from './icon';

import type { ComponentMeta,ComponentStory } from '@storybook/react';

export default {
  title: 'UI/Icon',
  component: Icon,
  argTypes: {
    fill: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  glyph: 'asterisk',
};
