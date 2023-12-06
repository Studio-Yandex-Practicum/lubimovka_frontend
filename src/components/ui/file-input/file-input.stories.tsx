import { FileInput } from './file-input';

import type { ComponentMeta,ComponentStory } from '@storybook/react';

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
