import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MonthsAndYearsFilter } from './months-and-years-filter';

export default {
  title: 'components/Filter',
  component: MonthsAndYearsFilter,

} as ComponentMeta<typeof MonthsAndYearsFilter>;

const Template: ComponentStory<typeof MonthsAndYearsFilter> = (args) => <MonthsAndYearsFilter {...args}/>;

export const ExampleFilter = Template.bind({});
// MonthsAndYearsFilter.args = {
//   filterCallBack: (month, year) => {
//     console.log(`месяц: ${month}, год: ${year}`);
//   },
// };

ExampleFilter.parameters = {
  layout: 'fullscreen'
};
