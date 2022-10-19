import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PersonCard } from './person-card';

export default {
  title: 'UI/PersonCard',
  component: PersonCard,

} as ComponentMeta<typeof PersonCard>;

// eslint-disable-next-line no-console
const exampleHandler = () => console.log('Click!');

const Template: ComponentStory<typeof PersonCard> = (args) => <PersonCard {...args}/>;

export const Volunteer = Template.bind({});
Volunteer.args = {
  name: 'Тереза Шимчак',
  image: '/',
  response: 'Очень интересный фестиваль',
  handleClick: exampleHandler
};

export const Participant = Template.bind({});
Participant.args = {
  name: 'Тереза Шимчак',
  image: '/',
  about: 'Драматург, сценарист, преподаватель',
  participant: true,
};
