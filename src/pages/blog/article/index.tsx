import { NextPage } from 'next';

import AppLayout from 'components/app-layout/index';
import { ArticlePage } from 'components/article-page';

interface IArticleProps {
  metaTitle: string;
}
const Article: NextPage<IArticleProps> = (props: IArticleProps) => {
  const {
    metaTitle,
  } = props;
  return (
    <AppLayout backButton={{ path: '/blog', text: 'блог' }}>
      <ArticlePage metaTitle={metaTitle} isBlog={true}/>
    </AppLayout>
  );
};

export default Article;
