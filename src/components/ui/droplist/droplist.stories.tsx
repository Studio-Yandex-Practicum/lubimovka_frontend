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
  type: 'months',
  handlerSubmitDroplist: string => {
    console.log(string);
  },
  data: [
    'ЯНВАРЬ', 'ФЕВРАЛЬ',
    'МАРТ', 'АПРЕЛЬ',
    'Май', 'Июнь',
    'Июль', 'Август',
    'Сентябрь', 'Октябрь',
    'Ноябрь', 'Декабрь',
  ],
  maxWidth: 240,
};

// Формирую массив dataType самостоятельно, из БД
export const YearsDroplist = Template.bind({});
YearsDroplist.args = {
  type: 'years',
  handlerSubmitDroplist: string => {
    console.log(string);
  },
  data: [
    2010, 2011,
    2012, 2013,
    2014, 2017,
    2020, 2021,
  ],
  maxWidth: '150',
};

// Использую массив dataType по умолчанию
export const DefaultMonthsDroplist = Template.bind({});
DefaultMonthsDroplist.args = {
  type: 'months',
  handlerSubmitDroplist: string => {
    console.log(string);
  },
};

// Использую массив dataType по умолчанию
export const DefaultYearsDroplist = Template.bind({});
DefaultYearsDroplist.args = {
  type: 'years',
  handlerSubmitDroplist: string => {
    console.log(string);
  },
};
