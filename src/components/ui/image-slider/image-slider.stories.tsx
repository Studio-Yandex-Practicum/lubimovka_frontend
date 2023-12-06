import Image from 'next/image';

import { ImageSlider } from './image-slider';

import type { ComponentMeta,ComponentStory } from '@storybook/react';

const demoImages = Array.from({ length: 5 }, (_, index) => `https://source.unsplash.com/random?${index}`);

export default {
  title: 'UI/ImageSlider',
  component: ImageSlider,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '840px' }}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof ImageSlider>;

const Template: ComponentStory<typeof ImageSlider> = (args) => <ImageSlider {...args}/>;

export const Default = Template.bind({});
Default.args = {
  children: demoImages.map((demoImage, index) => (
    <Image
      key={index}
      src={demoImage}
      alt=""
      layout="fill"
      objectFit="cover"
    />
  ))
};
Default.parameters = {
  layout: 'fullscreen'
};
