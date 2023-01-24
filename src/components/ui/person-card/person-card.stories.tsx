import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PersonCard } from './person-card';

export default {
  title: 'Components/PersonCard',
  component: PersonCard,

} as ComponentMeta<typeof PersonCard>;

const Template: ComponentStory<typeof PersonCard> = (args) => <PersonCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  name: 'Тереза Шимчак',
  image: 'https://source.unsplash.com/random/210×265/?person',
  response: 'Очень интересный фестиваль',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleClick: () => {},
};
