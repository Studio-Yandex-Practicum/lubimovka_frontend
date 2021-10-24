import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Photos } from './photos';

export default {
  title: 'Components/Photos',
  component: Photos,
} as ComponentMeta<typeof Photos>;

const Template: ComponentStory<typeof Photos> = (args) => {
  return <Photos {...args} />;
};

export const Default = Template.bind({});

Default.parameters = {
  layout: 'fullscreen',
};
