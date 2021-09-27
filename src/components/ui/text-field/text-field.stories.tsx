import {ComponentStory, ComponentMeta} from '@storybook/react';

import TextField from './text-field';

export default {
  title: 'UI/TextField',
  component: TextField,
  argTypes: {
    value: {
      control: {
        disable: false,
      }
    }
  }
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
};
