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
  dataType: [
    'ЯНВАРЬ', 'ФЕВРАЛЬ',
    'МАРТ', 'АПРЕЛЬ',
    'Май', 'Июнь',
    'Июль', 'Август',
    'Сентябрь', 'Октябрь',
    'Ноябрь', 'Декабрь',
  ],
  handlerSubmitDroplist: string => {
    console.log(string);
  },
  maxWidth: 240,
};

// Формирую массив dataType самостоятельно, из БД
export const YearsDroplist = Template.bind({});
YearsDroplist.args = {
  dataType: [
    2010, 2011,
    2012, 2013,
    2014, 2017,
    2020, 2021,
  ],
  handlerSubmitDroplist: string => {
    console.log(string);
  },
  maxWidth: '150',
};

// Использую массив dataType по умолчанию
export const DefaultMonthsDroplist = Template.bind({});
DefaultMonthsDroplist.args = {
  dataType: 'months',
  handlerSubmitDroplist: string => {
    console.log(string);
  },
};

// Использую массив dataType по умолчанию
export const DefaultYearsDroplist = Template.bind({});
DefaultYearsDroplist.args = {
  dataType: 'years',
  handlerSubmitDroplist: string => {
    console.log(string);
  },
};
