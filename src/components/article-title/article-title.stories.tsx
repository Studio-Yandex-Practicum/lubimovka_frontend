import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleTitle from './article-title';

export default {
  title: 'components/Article Title',
  component: ArticleTitle,

} as ComponentMeta<typeof ArticleTitle>;

const Template: ComponentStory<typeof ArticleTitle> = (args) => <ArticleTitle {...args} />;

export const BlogTitle = Template.bind({});
BlogTitle.args = {
  text: 'тест',
};
