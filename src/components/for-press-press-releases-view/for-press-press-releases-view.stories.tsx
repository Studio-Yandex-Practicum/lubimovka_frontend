import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ForPressPressReleasesView } from './for-press-press-releases-view';

import mockData from './assets/mock-data.json';

export default {
  title: 'Components/ForPressPressReleasesView',
  component: ForPressPressReleasesView,

} as ComponentMeta<typeof ForPressPressReleasesView>;

const Template: ComponentStory<typeof ForPressPressReleasesView> = (args) => {
  return <ForPressPressReleasesView {...args}/>;
};

export const Default = Template.bind({});

Default.parameters = {
  layout: 'fullscreen'
};

Default.args = {
  data: mockData,
};
