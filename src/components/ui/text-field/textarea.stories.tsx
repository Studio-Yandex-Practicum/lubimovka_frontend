import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TextArea} from './text-field';

export default {
  title: 'UI/TextArea',
  component: TextArea,
  argTypes: {
    value: {
      control: {
        disable: false,
      }
    }
  }
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Введите описание пьесы',
  valid: false,
  errorMessage: 'Нужно больше букв',
  //errorMessage: 'Описание пьессы не ввдено'
};
