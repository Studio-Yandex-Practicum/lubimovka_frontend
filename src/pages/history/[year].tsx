
import { AppLayout } from 'components/app-layout/index';
import itselfData from 'components/history-page/assets/mock-data-itself.json';
import { HistoryItself } from 'components/history-page/itself';
import { HistoryTitle } from 'components/history-page/title';
import { SEO } from 'components/seo';
import { Menu } from 'components/ui/menu';
import { fetchSettings } from 'services/api/settings-adapter';
import { fetcher } from 'services/fetcher';
import { notFoundResult } from 'shared/constants/server-side-props';
import { InternalServerError } from 'shared/helpers/internal-server-error';
import { useHorizontalScroll } from 'shared/hooks/use-horizontal-scroll';

import type { Festival, Years } from '__generated__/api-typings';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

const History = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    years,
    festival,
    defaultYear,
    showVolunteers,
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
          showVolunteers={showVolunteers} 
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
  const settings = await fetchSettings(); // Semicolon added
  const showVolunteers = settings.permissions.show_volunteers;
  
  return {
    props: {
      festival,
      years,
      defaultYear,
      showVolunteers,
    },
  };
};
