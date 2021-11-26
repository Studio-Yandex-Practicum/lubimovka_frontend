import {FC} from 'react';
import Head from 'next/head';
import React from 'react';
import { useState, useEffect } from 'react';

import { NewsTitle } from './news-title';
import { NewsList } from './news-list';
import { Droplist } from 'components/ui/droplist';

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


  const [month, setMonth] = useState('Январь');
  const [year, setYear] = useState('2021');

  useEffect(() => {
    console.log(year, month);
  }, [year, month]);

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <NewsTitle title='Новости'/>
      <div className={cx('droplist__container')}>
        <Droplist
          defaultListType='months'
          type='radio'
          defaultValue='Месяц'
          cb={([string]) => {setMonth(string);}}
          className={cx('droplist_months')}
        />
        <Droplist
          defaultListType='years'
          type='radio'
          defaultValue='Год'
          cb={([string]) => {setYear(string);}}
          className={cx('droplist_years')}
        />
      </div>
      <NewsList newsCardData={MockNewsData}/>
    </>
  );
};
