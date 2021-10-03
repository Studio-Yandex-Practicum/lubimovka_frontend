import { ComponentStory, ComponentMeta } from '@storybook/react';

import LibraryPagination from './library-pagination';

export default {
  title: 'Components/LibraryPagination',
  component: LibraryPagination
} as ComponentMeta<typeof LibraryPagination>;

const Template: ComponentStory<typeof LibraryPagination> = () => <LibraryPagination />;

export const Default = Template.bind({});
