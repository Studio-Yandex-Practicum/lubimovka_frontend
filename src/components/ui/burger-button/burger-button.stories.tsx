import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BurgerButton } from './burger-button';

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
  title: 'UI/BurgerButton',
  component: BurgerButton,
  parameters: {
    viewport: {
      viewports: customViewports,
      defaultViewport: 'iphone6p'
    },
  },

} as ComponentMeta<typeof BurgerButton>;

const Template: ComponentStory<typeof BurgerButton> = (args) => <BurgerButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};
