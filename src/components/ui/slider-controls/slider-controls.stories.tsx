import {ComponentStory, ComponentMeta} from '@storybook/react';
import {RightSlider} from './slider-controls';

export default {
  title: 'UI/SliderControls',
  component: RightSlider,
} as ComponentMeta<typeof RightSlider>;


const RightTemplate: ComponentStory<typeof RightSlider> = (args) => <RightSlider {...args} />;

export const Right = RightTemplate.bind({});
