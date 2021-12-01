import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ForPressPressReleasesView } from './for-press-press-releases-view';
import { pressRelease } from './assets/pressRelease';

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

Default.args = pressRelease;
