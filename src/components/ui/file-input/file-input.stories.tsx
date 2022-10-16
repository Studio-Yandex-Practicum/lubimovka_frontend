import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileInput } from './file-input';

export default {
  title: 'UI/FileInput',
  component: FileInput,
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args) => <FileInput {...args}/>;

export const Default = Template.bind({});
Default.args = {
  fileName: 'Чехов_Чайка.pdf',
  errorText: 'Файл содержит кириллицу, пожалуйста, переименуйте его.',
};
