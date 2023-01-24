import { AppLayout } from 'components/app-layout/index';
import { SEO } from 'components/seo';
import { Menu } from 'components/ui/menu';
import { HistoryTitle } from 'components/history-page/title';
import { HistoryItself } from 'components/history-page/itself';
import { useHorizontalScroll } from 'shared/hooks/use-horizontal-scroll';
import { fetcher } from 'services/fetcher';
import { notFoundResult } from 'shared/constants/server-side-props';
import { InternalServerError } from 'shared/helpers/internal-server-error';

import itselfData from 'components/history-page/assets/mock-data-itself.json';

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import type { Festival, Years } from '__generated__/api-typings';

const History = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    years,
    festival,
    defaultYear
  } = props;

  const menuRef = useHorizontalScroll<HTMLUListElement>();

  return (
    <>
      <SEO title="История фестиваля"/>
      <AppLayout>
        <Menu
          ref={menuRef}
          type="years"
        >
          {years.map((year) => (
            <Menu.Item
              key={year}
              href={`/history/${year}`}
              current={year === defaultYear}
            >
              {year}
            </Menu.Item>
          ))}
        </Menu>
        <HistoryTitle
          data={festival}
          currentYear={defaultYear}
        />
        <HistoryItself data={itselfData}/>
      </AppLayout>
    </>
  );
};

export default History;

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<Record<'year', string>>) => {
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
