import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Droplist } from './droplist';

export default {
  title: 'UI/droplist',
  component: Droplist,
} as ComponentMeta<typeof Droplist>;

const Template: ComponentStory<typeof Droplist> = (args) => <Droplist {...args} />;

export const MonthsDroplist = Template.bind({});
MonthsDroplist.args = {
  dataType: [
    'Январь', 'Февраль',
    'Март', 'Апрель',
    'Май', 'Июнь',
    'Июль', 'Август',
    'Сентябрь', 'Октябрь',
    'Ноябрь', 'Декабрь',
  ],
  handlerSubmitDroplist: string => {
    console.log(string);
  }
};

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
  }
};
