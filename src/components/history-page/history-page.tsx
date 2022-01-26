import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useState } from 'react';
import Head from 'next/head';

import { HistoryHeader } from './header';
import { HistoryTitle } from './title';
import { HistoryItself } from './itself';
import { fetcher } from 'shared/fetcher';
import { Festival, Years } from 'api-typings';

import itselfData from './assets/mock-data-itself.json';

export const HistoryPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    years, titleCounts
  } = props;
  const [currentTitleData, setCurrentTitleData] = useState(titleCounts);
  const [currentYear, setCurrentYear] = useState(years ? (years.years[0] ? years.years[0] : 2022) : 2022);
console.log(years);
console.log(titleCounts)
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

      <HistoryItself data={itselfData}/>
    </>
  );
};
/*
<HistoryHeader data={years} selectYear={selectYear}/>
      <HistoryTitle data={currentTitleData} currentYear={currentYear}/>
      */
const fetchStatistics = async (year: number) => {
  let data;
  try {
    data = await fetcher<Festival>(`/info/festivals/${year}/`);
  } catch (error) {
    return;
  }
  return data;
};
const fetchInitStateYear = async () => {
  let data;
  try {
    data = await fetcher<Years>('/info/festivals/years/');
  } catch (error) {
    return;
  }
  return data;
};
type History = {
  titleCounts : Festival,
  years : Years
}
export const getServerSideProps: GetServerSideProps<History> = async () => {
  const years = await fetchInitStateYear();
  if (!years) {
    return {
      notFound: true,
    };
  }
  else {
    const titleCounts = await fetchStatistics(years.years[0]);
    if(!titleCounts) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        titleCounts: titleCounts, years: years
      },
    };
  }
};
