import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from 'next/image';

import { ImageSlider } from './image-slider';

const fakeData = [
  {
    image: 'https://source.unsplash.com/random',
    description: 'Фото намбер уан'
  },
  {
    image: 'https://source.unsplash.com/random',
    description: 'Фото намбер ту'
  },
  {
    image: 'https://source.unsplash.com/random',
    description: 'Фото намбер фри'
  }
];

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
  children: fakeData.map((image, index) => (
    <Image
      key={index}
      src={image.image}
      alt={image.description}
      layout="fill"
      objectFit="cover"
    />
  ))
};
Default.parameters = {
  layout: 'fullscreen'
};
