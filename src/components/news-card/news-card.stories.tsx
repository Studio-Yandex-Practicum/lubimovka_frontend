import { ComponentStory, ComponentMeta } from '@storybook/react';

import NewsCard from './news-card';

export default {
  title: 'UI/NewsCard',
  component: NewsCard,

} as ComponentMeta<typeof NewsCard>;

const Template: ComponentStory<typeof NewsCard> = (args) => <NewsCard {...args}/>;

export const News = Template.bind({});
News.args = {
  newsId: 1,
  title: 'Дизайн Любимовки-2021',
  description: 'Присылайте ваши варианты текстовых описаний.',
  date: '2015-02-24T21:23',
  isMainPage: false
};

News.parameters = {
  layout: 'fullscreen',
};

export const NewsMainPage = Template.bind({});

NewsMainPage.args = {
  newsId: 1,
  title: 'Дизайн Любимовки-2021',
  description: 'Присылайте ваши варианты текстовых описаний.',
  date: '2015-02-24T21:23',
  isMainPage: true
};

NewsMainPage.parameters = {
  layout: 'fullscreen',
};
