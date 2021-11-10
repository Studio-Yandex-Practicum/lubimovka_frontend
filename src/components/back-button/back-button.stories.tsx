import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BackButton } from './back-button';

export default {
  title: 'Components/BackButton',
  component: BackButton,
} as ComponentMeta<typeof BackButton>;

const Template: ComponentStory<typeof BackButton> = (args) => {
  return <BackButton {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  label: 'Проекты',
  href: '/111'
};

Default.parameters = {
  layout: 'fullscreen',
};
