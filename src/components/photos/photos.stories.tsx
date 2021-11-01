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
Default.args = {
  images: Array.from({ length: 8 }, (item, index) => ({
    description: `Фото фестиваля ${index}`,
    image: 'https://source.unsplash.com/random',
  }))
};

Default.parameters = {
  layout: 'fullscreen',
};
