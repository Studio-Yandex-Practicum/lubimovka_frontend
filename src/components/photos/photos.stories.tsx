import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as NextImage from 'next/image';
import { ImageProps } from 'next/image';

import { Photos } from './photos';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: ImageProps) => <OriginalNextImage {...props} unoptimized />,
});

export default {
  title: 'Components/Photos',
  component: Photos,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '1440px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Photos>;

const Template: ComponentStory<typeof Photos> = (args) => {
  return <Photos {...args} />;
};

export const Default = Template.bind({});

Default.parameters = {
  layout: 'fullscreen',
};
