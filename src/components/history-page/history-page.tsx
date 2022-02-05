import { useState, FC } from 'react';
import Head from 'next/head';

import { HistoryHeader } from './header';
import { HistoryTitle } from './title';
import { HistoryItself } from './itself';
import { fetcher } from 'shared/fetcher';
import { Festival, Years } from 'api-typings';

import itselfData from './assets/mock-data-itself.json';

interface IHistoryPage  {
  years: Years,
  titleCounts: Festival
}
export const HistoryPage: FC<IHistoryPage> = ({ years, titleCounts }) => {
  const [currentTitleData, setCurrentTitleData] = useState(titleCounts);
  const [currentYear, setCurrentYear] = useState(years.years[0]);

  function selectYear(year: number ) {
    if(year) {
      setCurrentYear(year);
      fetchStatistics(year)
        .then((result) => {
          if(result) {
            setCurrentTitleData(result);
          }
        }).catch((error) => {
          throw(error);
        });
    }
  }
  return (
    <>
      <Head>
      </Head>
      <HistoryHeader data={years} selectYear={selectYear}/>
      <HistoryTitle data={currentTitleData} currentYear={currentYear}/>
      <HistoryItself data={itselfData}/>

    </>
  );
};

const fetchStatistics = async (year: number) => {
  let data;
  try {
    data = await fetcher<Festival>(`/info/festivals/${year}/`);
  } catch (error) {
    return;
  }
  return data;
};

