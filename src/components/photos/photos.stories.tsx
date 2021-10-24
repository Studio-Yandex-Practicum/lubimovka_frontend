import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Photos, TImageItem } from './photos';

const fakeData: TImageItem[] = [
  {
    image: 'https://source.unsplash.com/random',
    description: 'Фото фестиваля 1'
  },
  {
    image: 'https://source.unsplash.com/random',
    description: 'Фото фестиваля 2'
  },
  {
    image: 'https://source.unsplash.com/random',
    description: 'Фото фестиваля 3'
  },
  {
    image: 'https://source.unsplash.com/random',
    description: 'Фото фестиваля 4'
  },
  {
    image: 'https://source.unsplash.com/random',
    description: 'Фото фестиваля 5'
  },
  {
    image: 'https://source.unsplash.com/random',
    description: 'Фото фестиваля 6'
  },
  {
    image: 'https://source.unsplash.com/random',
    description: 'Фото фестиваля 7'
  },
  {
    image: 'https://source.unsplash.com/random',
    description: 'Фото фестиваля 8'
  }
];

export default {
  title: 'Components/Photos',
  component: Photos,
} as ComponentMeta<typeof Photos>;

const Template: ComponentStory<typeof Photos> = (args) => {
  return <Photos {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  images: fakeData
};
Default.parameters = {
  layout: 'fullscreen',
};
