import { useState } from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Image from 'next/image';
import { Lightbox } from './lightbox';
import { randomId } from '../../shared/helpers';

const fakeImages = Array.from({ length: 8 }, () => ({
  image: 'https://source.unsplash.com/random',
}));

export default {
  title: 'Components/Lightbox',
  component: Lightbox,
} as ComponentMeta<typeof Lightbox>;

const Template: Story = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleVisibility = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleVisibility}>
        Открыть лайтбокс
      </button>
      <Lightbox
        isOpen={isOpen}
        onClose={toggleVisibility}
        initialSlideIndex={0}
      >
        {fakeImages.map((image, index) => (
          <Image
            key={randomId()}
            src={image.image}
            alt={`Изображениe ${index}`}
            layout="fill"
            objectFit="cover"
            unoptimized
          />
        ))}
      </Lightbox>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
