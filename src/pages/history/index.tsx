import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Festival, Years, PlayFilters } from 'api-typings';

import { AppLayout } from 'components/app-layout/index';
import { HistoryPage } from 'components/history-page';
import { fetcher } from 'shared/fetcher';

const History = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    years, titleCounts, playFilters
  } = props;
  return (
    <AppLayout>
      <HistoryPage years={years} titleCounts={titleCounts} playFilters={playFilters}/>
    </AppLayout>
  );
};

export default History;
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
const fetchPlayFilters = async () => {
  let data;
  try {
    data = await fetcher<PlayFilters>('/library/playfilters/');
  } catch (error) {
    return;
  }
  return data;
};
type History = {
  titleCounts : Festival,
  years : Years,
  playFilters : PlayFilters
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
    const playFilters = await fetchPlayFilters();
    if(!playFilters) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        titleCounts: titleCounts, years: years, playFilters: playFilters
      },
    };
  }
};
