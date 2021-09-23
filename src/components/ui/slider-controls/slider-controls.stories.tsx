import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SliderControls} from './slider-controls';

export default {
  title: 'UI/SliderControls',
  component: SliderControls,
} as ComponentMeta<typeof SliderControls>;


const Template: ComponentStory<typeof SliderControls> = (args) => <SliderControls {...args} />;

export const Default = Template.bind({});
