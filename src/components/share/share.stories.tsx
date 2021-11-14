import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Share }  from './share';

const customViewports = {
  iphone6: {
    name: 'iPhone 6/7/8',
    styles: {
      height: '667px',
      width: '375px',
    },
    type: 'mobile',
  },
  iphone6p: {
    name: 'iPhone 6/7/8 Plus',
    styles: {
      height: '736px',
      width: '414px',
    },
    type: 'mobile',
  },
  ipad: {
    name: 'iPad',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
};

export default {
  title: 'Components/Share',
  component: Share,
  parameters: {
    viewport: {
      viewports: customViewports
    },
  },

} as ComponentMeta<typeof Share>;

const Template: ComponentStory<typeof Share> = (args) => <Share {...args} />;

export const BlogShare = Template.bind({});
BlogShare.args = {
  type: 'blog',
  size: 's',
};

export const NewsShare = Template.bind({});
NewsShare.args = {
  type: 'news',
  size: 's',
};

export const PerformanceShare = Template.bind({});
PerformanceShare.args = {
  type: 'performance',
  size: 's',
};
