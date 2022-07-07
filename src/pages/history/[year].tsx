import { AppLayout } from 'components/app-layout/index';
import { HistoryPage } from 'components/history-page';
import { SEO } from 'components/seo';
import { fetcher } from 'services/fetcher';
import { notFoundResult } from 'shared/constants/server-side-props';
import { InternalServerError } from 'shared/helpers/internal-server-error';

import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import type { Festival, Years, PlayFilters } from 'api-typings';

const History = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    years,
    titleCounts,
    defaultYear
  } = props;
  return (
    <AppLayout>
      <SEO title="История фестиваля"/>
      <HistoryPage
        years={years}
        titleCounts={titleCounts}
        defaultYear={defaultYear}
      />
    </AppLayout>
  );
};

export default History;

export const getServerSideProps = async ({ params }:  GetServerSidePropsContext<Record<'year', string>>) => {
  let years;
  let titleCounts;
  let playFilters;
  let defaultYear;

  try {
    ({ years } = await fetcher<Years>('/info/festivals/years/'));

    if (!years.length) {
      return notFoundResult;
    }

    defaultYear = params?.year ? Number(params.year) : years[0];

    titleCounts = await fetcher<Festival>(`/info/festivals/${defaultYear}/`);

    if (!titleCounts) {
      return notFoundResult;
    }

    playFilters = await fetcher<PlayFilters>('/library/playfilters/');

    if (!playFilters) {
      return {
        notFound: true,
      };
    }
  } catch {
    throw new InternalServerError();
  }

  return {
    props: {
      titleCounts,
      years,
      defaultYear,
    },
  };
};
