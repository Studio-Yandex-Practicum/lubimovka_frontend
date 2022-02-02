import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { Festival, Years } from 'api-typings';
import { AppLayout } from 'components/app-layout/index';
import { HistoryPage } from 'components/history-page';
import { fetcher } from 'shared/fetcher';

const History = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    years, titleCounts
  } = props;
  return (
    <AppLayout>
      <HistoryPage years={years} titleCounts={titleCounts}/>
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
