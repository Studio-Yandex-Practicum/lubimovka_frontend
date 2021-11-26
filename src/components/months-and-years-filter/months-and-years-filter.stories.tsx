import { ComponentStory, ComponentMeta } from '@storybook/react';

import Filter from './months-and-years-filter';

export default {
  title: 'components/Filter',
  component: Filter,

} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args}/>;

export const MonthsAndYearsFilter = Template.bind({});
// MonthsAndYearsFilter.args = {
//   filterCallBack: (month, year) => {
//     console.log(`месяц: ${month}, год: ${year}`);
//   },
// };

MonthsAndYearsFilter.parameters = {
  layout: 'fullscreen'
};
