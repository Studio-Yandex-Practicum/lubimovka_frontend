import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as NextImage from 'next/image';
import { ImageProps } from 'next/image';

import { Partners } from './partners';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: ImageProps) => <OriginalNextImage {...props} unoptimized/>,
});

export default {
  title: 'Components/Partners',
  component: Partners,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '1440px' }}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof Partners>;

const Template: ComponentStory<typeof Partners> = (args) => {
  return <Partners {...args}/>;
};

export const Default = Template.bind({});

Default.parameters = {
  layout: 'fullscreen',
};
