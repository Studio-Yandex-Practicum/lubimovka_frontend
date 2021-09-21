import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ImageSlider } from './image-slider';
import { TImageItem } from './image-slider';

const fakeData: TImageItem[] = [
  {
    imageURI: 'https://source.unsplash.com/random',
    caption: 'Фото намбер уан'
  },
  {
    imageURI: 'https://source.unsplash.com/random',
    caption: 'Фото намбер ту'
  },
  {
    imageURI: 'https://source.unsplash.com/random',
    caption: 'Фото намбер фри'
  }
];

export default {
  title: 'UI/ImageSlider',
  component: ImageSlider,
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto', maxWidth: '840px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof ImageSlider>;

const Template: ComponentStory<typeof ImageSlider> = (args) => <ImageSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: fakeData
};
Default.parameters = {
  layout: 'fullscreen'
};
