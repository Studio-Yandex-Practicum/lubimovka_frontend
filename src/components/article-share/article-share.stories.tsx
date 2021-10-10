import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleShare from './article-share';

export default {
  title: 'Components/Article Share',
  component: ArticleShare,

} as ComponentMeta<typeof ArticleShare>;

const Template: ComponentStory<typeof ArticleShare> = (args) => <ArticleShare {...args} />;

export const BlogShare = Template.bind({});
BlogShare.args = {
  authors: ['Лара Бессмертная'],
  photographers: ['Юрий Коротецкий', 'Наталия Времячкина'],
  illustrators: ['Лара Бессмертная'],
};

export const NewsShare = Template.bind({});
NewsShare.args = {

};
