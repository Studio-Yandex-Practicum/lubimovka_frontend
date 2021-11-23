import { ComponentStory, ComponentMeta } from '@storybook/react';

import LibraryFilter from './library-filter';

export default {
  title: 'Components/LibraryFilter',
  component: LibraryFilter
} as ComponentMeta<typeof LibraryFilter>;

const Template: ComponentStory<typeof LibraryFilter> = (args) => <LibraryFilter {...args}/>;

export const Default = Template.bind({});

