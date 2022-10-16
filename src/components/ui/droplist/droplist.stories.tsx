import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Droplist } from './droplist';

export default {
  title: 'UI/droplist',
  component: Droplist,
} as ComponentMeta<typeof Droplist>;

const Template: ComponentStory<typeof Droplist> = (args) => <Droplist {...args}/>;

export const MonthsDroplist = Template.bind({});
MonthsDroplist.args = {
  type: 'multiple',
  options: [
    { value: 0, text: 'January' },
    { value: 1, text: 'February' },
    { value: 2, text: 'March' },
    { value: 3, text: 'April' },
    { value: 4, text: 'MAY' },
    { value: 5, text: 'June' },
    { value: 6, text: 'JULy' },
    { value: 7, text: 'august' },
    { value: 8, text: 'September' },
    { value: 9, text: 'Октябрь' },
    { value: 10, text: 'Ноябрь' },
    { value: 11, text: 'Декабрь' }
  ],
  selectedOptions: [{ value: 11, text: 'Декабрь' }],
  placeholder: 'Месяц',
  onChange: (selectedOptions) => {selectedOptions;},
};

export const YearsDroplist = Template.bind({});
YearsDroplist.args = {
  type: 'single',
  options: [
    { value: 0, text: '2010' },
    { value: 1, text: '2011' },
    { value: 2, text: '2012' },
    { value: 3, text: '2013' },
    { value: 4, text: '2014' },
    { value: 5, text: 'June' },
    { value: 6, text: '2017' },
    { value: 7, text: '2020' },
    { value: 8, text: '2021' },
  ],
  selectedOptions: [{ value: 0, text: '2010' }],
  onChange: (selectedOptions) => {selectedOptions;},
};
