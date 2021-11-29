import React, { FC } from 'react'; //useCallback
import Head from 'next/head';
import cn from 'classnames/bind';

import { NewsTitle } from './news-title';
import { NewsList } from './news-list';
import { MonthsAndYearsFilter } from 'components/months-and-years-filter';

import MockNewsData from './assets/mock-data-news.json';
import style from './news-page.module.css';

const cx = cn.bind(style);

interface INewsPageProps {
  metaTitle: string;
}
export const NewsPage: FC<INewsPageProps> = (props: INewsPageProps) => {
  const {
    metaTitle,
  } = props;

  // const handleFiltered = useCallback(
  //   (month?: number, year?: number) => {
  //   },
  //   []
  // );

  const handleFiltered = () => {};

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <NewsTitle title='Новости'/>
      <MonthsAndYearsFilter className={cx('droplistСontainer')} filterCallBack={handleFiltered}/>
      <NewsList newsCardData={MockNewsData}/>
    </>
  );
};
