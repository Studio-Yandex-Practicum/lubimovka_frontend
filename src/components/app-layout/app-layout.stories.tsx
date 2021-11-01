import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLayout } from './app-layout';

export default {
  title: 'Components/AppLayout',
  component: AppLayout,
} as ComponentMeta<typeof AppLayout>;

const Template: ComponentStory<typeof AppLayout> = (args) => (
  <AppLayout>
    {args.children}
  </AppLayout>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <big
      style={{
        display: 'block',
        marginTop: '4vmax',
        textAlign: 'center',
        fontSize: '3vmax',
      }}
    >
      🐈
    </big>
  )
};
Default.parameters = {
  layout: 'fullscreen',
};
