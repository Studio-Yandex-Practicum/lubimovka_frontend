import { FC } from 'react';
import Head from 'next/head';

import { HistoryHeader } from './header';
import { HistoryTitle } from './title';
import { HistoryItself } from './itself';
import { fetcher } from 'shared/fetcher';
import { Festival } from 'api-typings';

import headerData from './assets/mock-data-header.json';
import titleData from './assets/mock-data-title.json';
import itselfData from './assets/mock-data-itself.json';

interface IHistoryPageProps {
  metaTitle: string;
}
export const HistoryPage: FC<IHistoryPageProps> = (props: IHistoryPageProps) => {
  const {
    metaTitle,
  } = props;
  function selectYear(year: number | undefined) {
    if(year) {
      fetchStatistics(year)
        .then((result) => {

          alert(year);
          if(result) {
            if(result.plays_count) {
              titleData.content[0].subtitle = result.plays_count?.toString();
            }
            if(result.selected_plays_count) {
              titleData.content[1].subtitle = result.selected_plays_count.toString();
            }
            if(result.selectors_count) {
              titleData.content[2].subtitle = result.selectors_count.toString();
            }
            if(result.volunteers_count) {
              titleData.content[3].subtitle = result.volunteers_count.toString();
            }
            if(result.events_count) {
              titleData.content[4].subtitle = result.events_count.toString();
            }
            if(result.cities_count) {
              titleData.content[5].subtitle = result.cities_count.toString();
            }
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
      <HistoryTitle data={titleData}/>
      <HistoryItself data={itselfData}/>
    </>
  );
};
const fetchStatistics = async (year: number) => {
  let data;

  try {
    data = await fetcher<Festival>(`/festivals/${year}`);
  } catch (error) {
    return;
  }

  return data;
};
