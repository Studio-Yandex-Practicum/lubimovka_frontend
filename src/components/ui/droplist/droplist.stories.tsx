import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Droplist } from './droplist';

export default {
  title: 'UI/droplist',
  component: Droplist,
} as ComponentMeta<typeof Droplist>;

const Template: ComponentStory<typeof Droplist> = (args) => <Droplist {...args} />;

export const MonthsDroplist = Template.bind({});
MonthsDroplist.args = {
  type: 'months',
};

export const YearsDroplist = Template.bind({});
YearsDroplist.args = {
  type: 'years',
};
