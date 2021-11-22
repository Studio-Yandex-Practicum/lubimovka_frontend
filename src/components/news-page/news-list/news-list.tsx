import {FC} from 'react';
import cn from 'classnames';

import style from './news-list.module.css';
import { NewsCard } from 'components/ui/news-card';


interface NewsCardData {
  id: number;
  title: string;
  description: string;
  image?: string;
  pub_date: string;

}
interface INewsList {
  newsCardData: Array<NewsCardData>;
  className?: string;
  length?: number;
}

export const NewsList: FC<INewsList> = ({newsCardData}) => {
  return(
    <>
      <section className={cn(style.newsList)}>
        {newsCardData.map((data) => (
          <NewsCard
            key={data.id}
            newsId={data.id}
            title={data.title}
            description={data.description}
            date={data.pub_date}
            isMainPage={false}
          />
        ))}
      </section>
    </>
  );
};
