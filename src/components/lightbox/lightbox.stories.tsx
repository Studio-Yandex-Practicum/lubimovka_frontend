import { useState } from 'react';
import { Story, ComponentMeta } from '@storybook/react';

import { Lightbox } from './lightbox';

export default {
  title: 'Components/Lightbox',
  component: Lightbox,
} as ComponentMeta<typeof Lightbox>;

const Template: Story = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleVisibility = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleVisibility}>Открыть лайтбокс</button>
      <Lightbox
        isOpen={isOpen}
        onClose={toggleVisibility}
        images={Array.from({ length: 8 }, () => ({
          image: 'https://source.unsplash.com/random',
        }))}
        initialSlide={0}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
