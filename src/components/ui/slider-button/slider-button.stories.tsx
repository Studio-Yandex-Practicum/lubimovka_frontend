import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SliderButton } from './slider-button';

export default {
  title: 'UI/SliderButton',
  component: SliderButton,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ width: '50px', height: '50px' }}>
          <Story/>
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof SliderButton>;

const Template: ComponentStory<typeof SliderButton> = (args) => <SliderButton {...args}/>;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  direction: 'right'
};
