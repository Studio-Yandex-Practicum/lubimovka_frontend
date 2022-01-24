import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Droplist } from './droplist';

export default {
  title: 'UI/droplist',
  component: Droplist,
} as ComponentMeta<typeof Droplist>;

const Template: ComponentStory<typeof Droplist> = (args) => <Droplist {...args}/>;

export const MonthsDroplist = Template.bind({});
MonthsDroplist.args = {
  type: 'single',
  list: [
    'January', 'February',
    'March', 'April',
    'MAY', 'June',
    'JULy', 'August',
    'September', 'Октябрь',
    'Ноябрь', 'Декабрь',
  ],
  selectList: ['January'],
  defaultValue: 'Месяц',
  onDelete: string => {
    console.log(`Удалился ${string} элемент`);
  },
  onAdd: string => {
    console.log(`Добавился ${string} элемент`);
  }
};

// export const YearsDroplist = Template.bind({});
// YearsDroplist.args = {
//   cb: string => {
//     // eslint-disable-next-line no-console
//     console.log(string);
//   },
//   data: [
//     2010, 2011,
//     2012, 2013,
//     2014, 2017,
//     2020, 2021,
//   ],
//   defaultValue: 'Месяц'
// };
