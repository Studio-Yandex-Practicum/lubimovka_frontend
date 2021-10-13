import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLayout } from './app-layout';
import { Page } from 'components/page';

export default {
  title: 'Components/AppLayout',
  component: AppLayout,
} as ComponentMeta<typeof AppLayout>;

const Template: ComponentStory<typeof AppLayout> = (args) => (
  <AppLayout>
    <Page.Container>
      {args.children}
    </Page.Container>
  </AppLayout>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <big
      style={{
        display: 'block',
        marginTop: 32,
        textAlign: 'center',
        fontSize: 48,
      }}
    >
      🐈
    </big>
  )
};
Default.parameters = {
  layout: 'fullscreen',
};
