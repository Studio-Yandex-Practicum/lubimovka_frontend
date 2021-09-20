import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonExample } from './Button-example';

export default {
  title: 'Example/Button-example',
  component: ButtonExample,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonExample>;

const Template: ComponentStory<typeof ButtonExample> = (args) => <ButtonExample {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  label: 'Button',
};
