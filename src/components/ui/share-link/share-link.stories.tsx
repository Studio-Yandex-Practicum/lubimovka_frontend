import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShareLink } from './share-link';

export default {
  title: 'UI/ShareLink',
  component: ShareLink,
} as ComponentMeta<typeof ShareLink>;

const Template: ComponentStory<typeof ShareLink> = (args) => <ShareLink {...args} />;

export const Share = Template.bind({});
Share.args = {
  icon: 'arrow-right',
  iconPlace: 'left',
  size: 's',
  border: 'borderBottomLeft'
};
