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
  placeholder: 'Введите имя',
  valid: false,
  errorMessage: 'Введите имя и фамилию',
  width: '360px',
};

export const Email = Template.bind({});
Email.args = {
  type: 'e-mail',
  placeholder: 'Введите e-mail',
  valid: false,
  errorMessage: 'Ведите правильный e-mail',
  width: '360px',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Введите пароль',
  valid: false,
  errorMessage: 'Неверный пароль',
  width: '360px',
};
