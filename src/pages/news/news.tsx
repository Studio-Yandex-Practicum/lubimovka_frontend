import Error from 'next/error';
import { useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';
import { InferGetServerSidePropsType } from 'next';

import { AppLayout } from 'components/app-layout';
import { NewsLayout } from 'components/news-layout';
import { PageTitle } from 'components/page-title';
import { Filter } from 'components/filter';
import { Select } from 'components/select';
import { NewsList } from 'components/news-list';
import { NewsCard } from 'components/news-card';
import { useNews } from 'providers/news-provider';
import { useIntersection } from 'shared/hooks/use-intersection';
import { fetcher } from 'shared/fetcher';
import { months } from 'shared/constants/months';
import { entriesPerPage } from 'shared/constants/news';
import { PaginatedNewsItemListList } from 'api-typings';

import styles from 'components/news-layout/news-layout.module.css';

const cx = classNames.bind(styles);

// TODO: Получать список лет из API
const fromYear = 2013;
const currentYear = new Date().getFullYear();
const monthOptions = months.map((month, index) => ({
  text: month,
  value: index + 1,
}));
const yearOptions = Array.from(Array(currentYear - fromYear), (_, index) => ({
  text: (index + fromYear).toString(),
  value: index + fromYear,
}));

const News = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    errorCode,
  } = props;
  const {
    entries,
    setServerSideEntries,
    handleShouldLoadEntries,
    hasMoreEntries,
    selectedMonthOption,
    handleMonthChange,
    selectedYearOption,
    handleYearChange,
    pending,
  } = useNews();
  const [bottomBoundaryRef, shouldLoadEntries] = useIntersection<HTMLLIElement>({ threshold: 1 });
  const lastNewsIndex = useMemo(() => entries.length - 1, [entries]);

  useEffect(() => {
    if (!entries.length && props.entries) {
      setServerSideEntries({
        entries: props.entries,
        hasMoreEntries: props.hasMoreEntries,
      });
    }
  }, []);

  useEffect(() => {
    if (!pending && shouldLoadEntries && hasMoreEntries) {
      handleShouldLoadEntries();
    }
  }, [pending, hasMoreEntries, shouldLoadEntries]);

  if (errorCode) {
    return (
      <Error statusCode={errorCode}/>
    );
  }

  return (
    <AppLayout>
      <NewsLayout>
        <PageTitle className={cx('title')}>
          Новости
        </PageTitle>
        <Filter className={cx('filter')}>
          <Filter.Field className={cx('month-field')}>
            <Select
              placeholder="Месяц"
              options={monthOptions}
              selectedOption={selectedMonthOption}
              onChange={handleMonthChange}
            />
          </Filter.Field>
          <Filter.Field className={cx('year-field')}>
            <Select
              placeholder="Год"
              options={yearOptions}
              selectedOption={selectedYearOption}
              onChange={handleYearChange}
            />
          </Filter.Field>
        </Filter>
        <NewsList
          className={cx('list')}
          onShouldLoadEntries={handleShouldLoadEntries}
          hasMoreEntries={hasMoreEntries}
          pending={pending}
        >
          {entries.map((entry, index) => (
            <NewsList.Item
              key={entry.id}
              {...index === lastNewsIndex ? {
                ref: bottomBoundaryRef,
              } : {}}
            >
              <NewsCard
                newsId={entry.id}
                title={entry.title}
                description={entry.description}
                date={entry.pub_date}
                isMainPage={false}
              />
            </NewsList.Item>
          ))}
        </NewsList>
      </NewsLayout>
    </AppLayout>
  );
};

export const getServerSideProps = async () => {
  let response;

  try {
    response = await fetcher<PaginatedNewsItemListList>(`/news/?limit=${entriesPerPage}`);
  } catch {
    return {
      props: {
        errorCode: 500,
      }
    };
  }

  return {
    props: {
      entries: response.results,
      hasMoreEntries: !!response.next,
    }
  };
};

export default News;