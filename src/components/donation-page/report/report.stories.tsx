import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Report } from './report';

import mockData from '../../../pages/donation/assets/mock-donation-data.json';

export default {
  title: 'Components/Donation-Report',
  component: Report,
} as ComponentMeta<typeof Report>;

const Template: ComponentStory<typeof Report> = (args) => <Report {...args}/>;

export const General = Template.bind({});
General.args = mockData.report;
