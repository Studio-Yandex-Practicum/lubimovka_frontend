import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import mockData from '../../../../pages/donation/assets/mock-donation-data.json';

import { Opportunity } from './opportunity';

export default {
  title: 'Components/Donation-Opportunity',
  component: Opportunity,
} as ComponentMeta<typeof Opportunity>;

const Template: ComponentStory<typeof Opportunity> = (args) => <Opportunity {...args} />;

export const General = Template.bind({});
General.args = mockData.opportunities[0];
