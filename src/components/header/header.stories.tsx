import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './header';

export default {
  title: 'Layout/Header',
  component: Header,
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto', maxWidth: '1440px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  layout: 'fullscreen'
};
