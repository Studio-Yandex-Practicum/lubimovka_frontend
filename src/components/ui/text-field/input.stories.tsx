import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Input} from './text-field';

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
  placeholder: 'Введите имя'
};

export const Email = Template.bind({});
Email.args = {
  type: 'e-mail',
  placeholder: 'Введите e-mail'
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Введите пароль'
};
