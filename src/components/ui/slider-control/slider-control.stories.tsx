import {ComponentStory, ComponentMeta} from '@storybook/react';

import {SliderControl} from './slider-control';

export default {
  title: 'UI/SliderControl',
  component: SliderControl,
} as ComponentMeta<typeof SliderControl>;


const Template: ComponentStory<typeof SliderControl> = (args) => <SliderControl {...args} />;

export const Default = Template.bind({});
