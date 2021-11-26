import { ComponentStory, ComponentMeta } from '@storybook/react';

import MonthsAndYearFilter from './months-and-years-filter';

export default {
  title: 'components/Filter',
  component: MonthsAndYearFilter,

} as ComponentMeta<typeof MonthsAndYearFilter>;

const Template: ComponentStory<typeof MonthsAndYearFilter> = (args) => <MonthsAndYearFilter {...args}/>;

export const MonthsAndYearsFilter = Template.bind({});
// MonthsAndYearsFilter.args = {
//   filterCallBack: (month, year) => {
//     console.log(`месяц: ${month}, год: ${year}`);
//   },
// };

MonthsAndYearsFilter.parameters = {
  layout: 'fullscreen'
};
