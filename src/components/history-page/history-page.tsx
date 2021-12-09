import { FC, useState, useEffect } from 'react';
import Head from 'next/head';

import { HistoryHeader } from './header';
import { HistoryTitle } from './title';
import { HistoryItself } from './itself';
import { fetcher } from 'shared/fetcher';
import { Festival, Years } from 'api-typings';

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
    cities_count: 15,
    video_link: '#',
    start_date: '2020-09-5',
    end_date: '2020-09-12',
    description: 'В Москве на площадке «8/3». Читки fringe-программы фестиваля впервые прошли в Центре Вознесенского.'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [years, setYears] = useState({ years: [2020,2019] });
  useEffect(() => {
    fetchInitStateYear()
      .then((years) => {
        if(years) {
          setYears(years);
          fetchStatistics(years.years[0])
            .then((result) => {
              if(result) {
                const titleCounts = {
                  plays_count: result.plays_count ? result.plays_count : 0,
                  selected_plays_count: result.selected_plays_count ? result.selected_plays_count : 0,
                  selectors_count: result.selectors_count ? result.selectors_count : 0,
                  volunteers_count: result.volunteers_count ? result.volunteers_count : 0,
                  events_count: result.events_count ? result.events_count : 0,
                  cities_count: result.cities_count ? result.cities_count : 0,
                  video_link: result.video_link ? result.video_link : '#',
                  start_date: result.start_date ? result.start_date : '2020-09-5',
                  end_date: result.end_date ? result.end_date : '2020-09-12',
                  description: result.description ? result.description : ''
                };
                setCurrentTitleData(titleCounts);
                setIsLoading(true);
              }
            });
        }
      }).catch((err) => {
        throw(err);
      });
  }, []);
  function selectYear(year: number ) {
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
              cities_count: result.cities_count ? result.cities_count : 0,
              video_link: result.video_link ? result.video_link : '#',
              start_date: result.start_date ? result.start_date : '2020-09-5',
              end_date: result.end_date ? result.end_date : '2020-09-12',
              description: result.description ? result.description : ''
            };
            setCurrentTitleData(titleCounts);
          }
        }).catch((error) => {
          throw(error);
        });
    }
  }
  if (!isLoading) {
    return (
      <Head>
        <title>{metaTitle}</title>
      </Head>
    );
  }
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <HistoryHeader data={years} selectYear={selectYear}/>
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
const fetchInitStateYear = async () => {
  let data;
  try {
    data = await fetcher<Years>('/info/festivals/years');
  } catch (error) {
    return;
  }
  return data;
};

