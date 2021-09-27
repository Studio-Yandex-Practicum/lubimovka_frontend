import {ComponentStory, ComponentMeta} from '@storybook/react';

import Input from './input';

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    value: {
      control: {
        disable: false,
      }
    }
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
};

export const Email = Template.bind({});
Email.args = {
  type: 'e-mail',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};
