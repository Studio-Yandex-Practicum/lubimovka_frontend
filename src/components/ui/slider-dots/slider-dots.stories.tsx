import { SliderDots } from './slider-dots';

import type { ComponentMeta,ComponentStory } from '@storybook/react';

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
