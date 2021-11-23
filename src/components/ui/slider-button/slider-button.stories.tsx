import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SliderButton } from './slider-button';

export default {
  title: 'UI/SliderButton',
  component: SliderButton,
} as ComponentMeta<typeof SliderButton>;


const Template: ComponentStory<typeof SliderButton> = (args) => <SliderButton {...args}/>;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  direction: 'right',
};
