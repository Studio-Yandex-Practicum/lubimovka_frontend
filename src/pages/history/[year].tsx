import { useRouter } from 'next/router';

import { AppLayout } from 'components/app-layout/index';
import { SEO } from 'components/seo';
import { HistoryHeader } from 'components/history-page/header';
import { HistoryTitle } from 'components/history-page/title';
import { HistoryItself } from 'components/history-page/itself';

import { fetcher } from 'services/fetcher';
import { notFoundResult } from 'shared/constants/server-side-props';
import { InternalServerError } from 'shared/helpers/internal-server-error';

import itselfData from 'components/history-page/assets/mock-data-itself.json';

import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import type { Festival, Years } from 'api-typings';

const History = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    years,
    festival,
    defaultYear
  } = props;

  const router = useRouter();
  const [year] = years;

  function selectYear(year: number) {
    router.push(`/history/${year}`, undefined, { scroll: true });
  }

  return (
    <AppLayout>
      <SEO title="История фестиваля"/>
      <HistoryHeader
        years={years}
        selectYear={selectYear}
        currentYear={defaultYear || year}
      />
      <HistoryTitle
        data={festival}
        currentYear={defaultYear || year}
      />
      <HistoryItself data={itselfData}/>
    </AppLayout>
  );
};

export default History;

export const getServerSideProps = async ({ params }:  GetServerSidePropsContext<Record<'year', string>>) => {
  let years;
  let festival;
  let defaultYear;

  try {
    ({ years } = await fetcher<Years>('/info/festivals/years/'));

    if (!years.length) {
      return notFoundResult;
    }

    defaultYear = params?.year
      ? Number(params.year)
      : years[0];

    festival = await fetcher<Festival>(`/info/festivals/${defaultYear}/`);
  } catch ({ statusCode }) {
    switch (statusCode) {
    case 404:
      return notFoundResult;
    default:
      throw new InternalServerError();
    }
  }

  return {
    props: {
      festival,
      years,
      defaultYear,
    },
  };
};
