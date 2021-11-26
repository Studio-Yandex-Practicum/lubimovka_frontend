import { ComponentMeta, ComponentStory } from '@storybook/react';

import AppLayout from './app-layout';
import { AppSettingsProvider } from 'components/app';
import { PartnerType } from '../../shared/types';

export default {
  title: 'Components/AppLayout',
  component: AppLayout,
} as ComponentMeta<typeof AppLayout>;

const fakeAppSettings = {
  projects: [],
  generalPartners: [
    {
      name: '',
      logo: require('mocks/assets/partners/partnerLogo.png'),
      type: 'general' as PartnerType,
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
