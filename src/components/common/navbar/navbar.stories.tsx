import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbar } from './navbar';

export default {
  title: 'Layout/Header',
  component: Navbar,
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto', maxWidth: '1440px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  layout: 'fullscreen'
};
