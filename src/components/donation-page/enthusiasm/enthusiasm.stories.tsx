import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import mockData from '../../../pages/donation/assets/mock-donation-data.json';

import { Enthusiasm } from './enthusiasm';

export default {
  title: 'Components/Enthusiasm',
  component: Enthusiasm,
} as ComponentMeta<typeof Enthusiasm>;

const Template: ComponentStory<typeof Enthusiasm> = (args) => <Enthusiasm {...args} />;

export const General = Template.bind({});
General.args = mockData.enthusiasm;
