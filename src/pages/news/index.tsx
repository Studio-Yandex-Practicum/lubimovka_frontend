import { NextPage } from 'next';

import AppLayout from 'components/app-layout/index';
import { NewsPage } from 'components/news-page';


interface INewsProps {
  metaTitle: string;
}
const News: NextPage<INewsProps> = (props: INewsProps) => {
  const {
    metaTitle,
  } = props;
  return (
    <AppLayout>
      <NewsPage metaTitle={metaTitle}/>
    </AppLayout>
  );
};

export default News;
