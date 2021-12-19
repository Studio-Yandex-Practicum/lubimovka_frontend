import { FC } from 'react';
import cn from 'classnames/bind';

import { NewsCard } from 'components/ui/news-card';
import { NewsItemList } from 'api-typings';

import style from './news-list.module.css';

const cx = cn.bind(style);
interface INewsList {
  newsListData: NewsItemList[];
  className?: string;
}

export const NewsList: FC<INewsList> = ({ newsListData, className }) => {
  return (
    <ul className={cx('newsList', className)}>
      {newsListData.map((data) => (
        <li key={data.id}>
          <NewsCard
            newsId={data.id}
            title={data.title}
            description={data.description}
            date={data.pub_date!}
            isMainPage={false}
          />
        </li>
      ))}
    </ul>
  );
};
