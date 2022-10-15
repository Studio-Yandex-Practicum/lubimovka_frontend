import { ComponentStory, ComponentMeta } from '@storybook/react';

import LibraryFilter from './library-filter';

const fakeYears = Array.from({ length: 8 }, () => ({ value: 2022, text: '2022' }));

const fakeProgrammes = Array.from({ length: 4 }, () => ({ pk: 2, name: 'Шорт-лист' }));

export default {
  title: 'Components/LibraryFilter',
  component: LibraryFilter
} as ComponentMeta<typeof LibraryFilter>;

const Template: ComponentStory<typeof LibraryFilter> = (args) => <LibraryFilter {...args}/>;

export const Default = Template.bind({});
Default.args = {
  years: fakeYears,
  programmes: fakeProgrammes
};

