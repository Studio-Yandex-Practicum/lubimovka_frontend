import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleTitle from './article-title';

export default {
  title: 'components/Article Title',
  component: ArticleTitle,

} as ComponentMeta<typeof ArticleTitle>;

const Template: ComponentStory<typeof ArticleTitle> = (args) => <ArticleTitle {...args} />;

export const BlogTitle = Template.bind({});
BlogTitle.args = {
  isBlog: true,
  title: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
  date: '05 октября 2020',
  author: 'Лара Бессмертная',
  imgLink: 'https://littletravel.ru/wp-content/uploads/2020/01/1530726597_pg-9238.jpg'
};

export const NewsTitle = Template.bind({});
NewsTitle.args = {
  isBlog: false,
  title: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
  date: '05 октября 2020',
  author: 'Лара Бессмертная',
  imgLink: 'https://littletravel.ru/wp-content/uploads/2020/01/1530726597_pg-9238.jpg'
};
