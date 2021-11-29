import {FC} from 'react';
import Head from 'next/head';
import React from 'react';
import { useCallback } from 'react';

import { NewsTitle } from './news-title';
import { NewsList } from './news-list';
import { MonthsAndYearsFilter } from 'components/months-and-years-filter';

import MockNewsData from './assets/mock-data-news.json';

import cn from 'classnames/bind';
import style from './news-page.module.css';


const cx = cn.bind(style);

interface INewsPageProps {
  metaTitle: string;
}
export const NewsPage: FC<INewsPageProps> = (props: INewsPageProps) => {
  const {
    metaTitle,
  } = props;


  const handleFiltered = useCallback(
    (month?: number, year?: number) => {
    },
    []
  )

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
