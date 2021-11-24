import { ComponentStory, ComponentMeta } from '@storybook/react';

import LibraryPagination from './library-pagination';

export default {
  title: 'Components/LibraryPagination',
  component: LibraryPagination
} as ComponentMeta<typeof LibraryPagination>;

const Template: ComponentStory<typeof LibraryPagination> = (args) => <LibraryPagination {...args}/>;

export const Default = Template.bind({});

Default.args = {
  letters: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н',
    'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'],
  top: '16px',
  authors: ['Августеняк Екатерина', 'Августеняк Екатерина', 'Августеняк Екатерина',
    'Августеняк Екатерина', 'Августеняк Екатерина', 'Августеняк Екатерина', 'Августеняк Екатерина',
    'Августеняк Екатерина', 'Августеняк Екатерина','Августеняк Екатерина',
    'Александрин Егор', 'Борисов Борис', 'Фёдоров Фёдор']
};
