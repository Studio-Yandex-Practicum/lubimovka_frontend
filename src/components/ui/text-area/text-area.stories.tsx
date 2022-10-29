import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextArea from './text-area';

export default {
  title: 'UI/TextArea',
  component: TextArea,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '360px' }}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args}/>;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Текст сообщения',
  rows: 4,
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'Текст сообщения',
  rows: 4,
  errorText: 'Что-то пошло не так...'
};
