import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReviewCard } from './review-card';

export default {
  title: 'Components/ReviewCard',
  component: ReviewCard,
} as ComponentMeta<typeof ReviewCard>;

const Template: ComponentStory<typeof ReviewCard> = (args) => <ReviewCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  text: 'Мне данный формат дал возможность самой выбирать, как двигается персонаж, что на нем надето, какую машину он водит, и что за плакат висит в подвале церкви. Это было приятно, ведь я как будто сама поучаствовала в спектакле',
  author: 'Дарья Морозова',
};
