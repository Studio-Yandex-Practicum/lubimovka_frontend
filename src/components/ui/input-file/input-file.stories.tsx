import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputFile } from './input-file';

export default {
  title: 'UI/input-file',
  component: InputFile,
} as ComponentMeta<typeof InputFile>;

const Template: ComponentStory<typeof InputFile> = (args) => <InputFile {...args} />;

export const AddFile = Template.bind({});
AddFile.args = {
  typesListFiles: ['.pdf', '.txt'],
};
