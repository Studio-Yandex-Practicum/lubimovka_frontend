import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DonationPageTitle } from './donationPageTitle';

import mockData from '../../../pages/donation/assets/mock-donation-data.json';

export default {
  title: 'Components/Donation-DonationPageTitle',
  component: DonationPageTitle,
} as ComponentMeta<typeof DonationPageTitle>;

const Template: ComponentStory<typeof DonationPageTitle> = (args) => <DonationPageTitle {...args}/>;

export const General = Template.bind({});
General.args = mockData.donationPageTitle;

General.parameters = {
  layout: 'fullscreen'
};
