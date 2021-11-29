import {FC} from 'react';
import cn from 'classnames/bind';

import style from './news-list.module.css';
import { NewsCard } from 'components/ui/news-card';

const cx = cn.bind(style);

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
}

export const NewsList: FC<INewsList> = ({newsCardData, className}) => {
  return(
    <>
      <ul className={cx('newsList', className)}>
        {newsCardData.map((data) => (
          <li key={data.id}><NewsCard
            newsId={data.id}
            title={data.title}
            description={data.description}
            date={data.pub_date}
            isMainPage={false}
          /></li>
        ))}
      </ul>
    </>
  );
};
