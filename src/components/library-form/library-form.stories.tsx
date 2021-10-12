import { ComponentStory, ComponentMeta } from '@storybook/react';

import LibraryForm from './library-form';

export default {
  title: 'Components/LibraryForm',
  component: LibraryForm
} as ComponentMeta<typeof LibraryForm>;

const Template: ComponentStory<typeof LibraryForm> = (args) => <LibraryForm {...args}/>;

export const Default = Template.bind({});

