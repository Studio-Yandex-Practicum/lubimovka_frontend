import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextInput } from './text-input';

export default {
  title: 'UI/TextInput',
  component: TextInput,
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto', maxWidth: '360px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  ariaLabel: 'Ваше имя',
  placeholder: 'Ваше имя',
};

export const Error = Template.bind({});
Error.args = {
  ariaLabel: 'Ваше имя',
  placeholder: 'Ваше имя',
  errorMessage: 'Что-то пошло не так...'
};
