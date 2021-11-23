import { NextPage } from 'next';

import AppLayout from 'components/app-layout/index';
import { ArticlePage } from 'components/article-page';
import BlogArticle from '../../../components/article-page/assets/mock-blog-article.json';
import { BlogData } from '../../../components/article-page/types/article-types';

interface IArticleProps {
  metaTitle: string;
}
const Article: NextPage<IArticleProps> = (props: IArticleProps) => {
  const {
    metaTitle,
  } = props;
  return (
    <AppLayout>
      <ArticlePage metaTitle={metaTitle} isBlog={true} data={BlogArticle as BlogData}/>
    </AppLayout>
  );
};

export default Article;
