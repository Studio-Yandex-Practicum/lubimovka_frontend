import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReviewCarousel } from './review-carousel';
import { ReviewCard } from 'components/review-card';

const reviewCardArgs = [
  {
    text: 'Что-то похожее на эффект от мультфильмов типа «Сауз Парк» или про коня Боджэка возникает — я думаю, и пьеса написана с этой интонацией американских взрослых мультсериалов. И как хорошо все это с куклой-носочком. Так все чисто сделано!',
    author: 'Наталья Зайцева',
  },
  {
    text: 'Для самой этой истории формат читки работает отличным ироническим отстранением',
    author: 'Дина Годер',
  },
  {
    text: 'Мне данный формат дал возможность самой выбирать, как двигается персонаж, что на нем надето, какую машину он водит, и что за плакат висит в подвале церкви. Это было приятно, ведь я как будто сама поучаствовала в спектакле',
    author: 'Дарья Морозова',
  },
];

export default {
  title: 'Components/ReviewCarousel',
  component: ReviewCarousel,
  subcomponents: { ReviewCard },
} as ComponentMeta<typeof ReviewCarousel>;

const Template: ComponentStory<typeof ReviewCarousel> = (args) => (
  <ReviewCarousel {...args}>
    {reviewCardArgs.map((cardArgs, index) => (
      <ReviewCard key={index} {...cardArgs}/>
    ))}
  </ReviewCarousel>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Отзывы зрителей',
  mode: 'multiple',
};
