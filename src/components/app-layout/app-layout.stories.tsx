import { ComponentMeta, ComponentStory } from '@storybook/react';

import AppLayout from './app-layout';
import { AppSettingsProvider } from 'components/app';

export default {
  title: 'Components/AppLayout',
  component: AppLayout,
} as ComponentMeta<typeof AppLayout>;

const fakeAppSettings = {
  projects: [],
  generalPartners: [
    {
      name: '',
      logo: require('mocks/assets/partners/fond-prohorova.png'),
      type: 'general',
    }
  ],
};

const Template: ComponentStory<typeof AppLayout> = (args) => (
  <AppSettingsProvider value={fakeAppSettings}>
    <AppLayout>
      {args.children}
    </AppLayout>
  </AppSettingsProvider>
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
