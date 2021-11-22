import {FC} from 'react';
import Head from 'next/head';
import React from 'react';
import { useState, useEffect } from 'react';

import { NewsTitle } from './news-title';
import { NewsList } from './news-list';
import { Droplist } from 'components/ui/droplist';

import MookNewsData from './assets/mock-data-news.json';

import cn from 'classnames';
import style from './news-page.module.css';

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
      <div className={cn(style.droplist)}>
        <Droplist
          defaultListType='months'
          type='radio'
          defaultValue='Месяц'
          cb={([string]) => {setMonth(string);}}
          className={style.droplistMonths}
        />
        <Droplist
          defaultListType='years'
          type='radio'
          defaultValue='Год'
          cb={([string]) => {setYear(string);}}
          className={cn(style.droplistYears)}
        />
      </div>
      <NewsList newsCardData={MookNewsData}/>
    </>
  );
};
