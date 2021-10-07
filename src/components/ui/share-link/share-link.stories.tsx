import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShareLink } from './share-link';

export default {
  title: 'UI/ShareLink',
  component: ShareLink,
} as ComponentMeta<typeof ShareLink>;

const Template: ComponentStory<typeof ShareLink> = (args) => <ShareLink {...args} />;

export const Fb = Template.bind({});
Fb.args = {
  social: 'Fb',
  label: 'Fb',
};

export const Vk = Template.bind({});
Vk.args = {
  social: 'Vk',
  label: 'Vk',
};

export const Twtr = Template.bind({});
Twtr.args = {
  social: 'Twtr',
  label: 'Twtr',
};

