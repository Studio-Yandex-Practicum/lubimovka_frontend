import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ImageSlider } from './image-slider';
import { TImageItem } from 'components/ui/image-slider';

const fakeData: TImageItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    caption: 'Ширшавые горы'
  },
  {
    image: 'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    caption: 'Гладкие горы'
  },
  {
    image: 'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    caption: 'Птица над водой'
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

export const Desktop = Template.bind({});
Desktop.args = {
  images: fakeData
};

export const Mobile = Template.bind({});
Mobile.args = {
  images: fakeData
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  },
  layout: 'fullscreen'
};
