import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Droplist } from './droplist';

export default {
  title: 'UI/droplist',
  component: Droplist,
} as ComponentMeta<typeof Droplist>;

const Template: ComponentStory<typeof Droplist> = (args) => <Droplist {...args} />;

// Формирую массив dataType самостоятельно, из БД
export const MonthsDroplist = Template.bind({});
MonthsDroplist.args = {
  type: 'radio',
  cb: string => {
    console.log(string);
  },
  data: [
    'January', 'February',
    'March', 'April',
    'MAY', 'June',
    'JULy', 'August',
    'September', 'Октябрь',
    'Ноябрь', 'Декабрь',
  ],
  defaultValue: 'Месяц'
};

// Формирую массив dataType самостоятельно, из БД
export const YearsDroplist = Template.bind({});
YearsDroplist.args = {
  cb: string => {
    console.log(string);
  },
  data: [
    2010, 2011,
    2012, 2013,
    2014, 2017,
    2020, 2021,
  ],
  defaultValue: 'Месяц'
};
