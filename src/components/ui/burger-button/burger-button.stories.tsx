import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BurgerButton } from './burger-button';

export default {
  title: 'UI/BurgerButton',
  component: BurgerButton,

} as ComponentMeta<typeof BurgerButton>;

const Template: ComponentStory<typeof BurgerButton> = (args) => <BurgerButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};
