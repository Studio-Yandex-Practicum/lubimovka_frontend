import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OpenToCooperation } from './open-to-cooperation';

export default {
  title: 'Components/OpenToCooperation',
  component: OpenToCooperation,
} as ComponentMeta<typeof OpenToCooperation>;

const Template: ComponentStory<typeof OpenToCooperation> = (args) => {
  return <OpenToCooperation {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  email: 'more@lubimovka.ru'
};

Default.parameters = {
  layout: 'fullscreen',
};
