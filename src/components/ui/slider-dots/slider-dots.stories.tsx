import {ComponentStory, ComponentMeta} from '@storybook/react';

import {SliderDots} from './slider-dots';

export default {
  title: 'UI/SliderDots',
  component: SliderDots,
} as ComponentMeta<typeof SliderDots>;

const Template: ComponentStory<typeof SliderDots> = (args) => <SliderDots {...args}/>;

export const Default = Template.bind({});
Default.args = {
  count: 5,
  currentSlide: 1,
};
