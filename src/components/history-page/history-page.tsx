import { FC, useState } from 'react';
import Head from 'next/head';

import { HistoryHeader } from './header';
import { HistoryTitle } from './title';
import { HistoryItself } from './itself';
import { fetcher } from 'shared/fetcher';
import { Festival } from 'api-typings';

import headerData from './assets/mock-data-header.json';
import itselfData from './assets/mock-data-itself.json';

interface IHistoryPageProps {
  metaTitle: string;
}
export const HistoryPage: FC<IHistoryPageProps> = (props: IHistoryPageProps) => {
  const {
    metaTitle,
  } = props;
  const [currentTitleData, setCurrentTitleData] = useState({
    plays_count: 756,
    selected_plays_count: 145,
    selectors_count: 145,
    volunteers_count: 145,
    events_count: 7,
    cities_count: 15
  });
  function selectYear(year: number | undefined) {
    if(year) {
      fetchStatistics(year)
        .then((result) => {
          if(result) {
            const titleCounts = {
              plays_count: result.plays_count ? result.plays_count : 0,
              selected_plays_count: result.selected_plays_count ? result.selected_plays_count : 0,
              selectors_count: result.selectors_count ? result.selectors_count : 0,
              volunteers_count: result.volunteers_count ? result.volunteers_count : 0,
              events_count: result.events_count ? result.events_count : 0,
              cities_count: result.cities_count ? result.cities_count : 0
            };
            setCurrentTitleData(titleCounts);
          }
        }).catch((error) => {
          throw(error);
        });
    }
  }
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <HistoryHeader data={headerData} selectYear={selectYear}/>
      <HistoryTitle data={currentTitleData}/>
      <HistoryItself data={itselfData}/>
    </>
  );
};
const fetchStatistics = async (year: number) => {
  let data;

  try {
    data = await fetcher<Festival>(`/info/festivals/${year}`);
  } catch (error) {
    return;
  }

  return data;
};
