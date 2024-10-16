import classNames from 'classnames/bind';
import { format } from 'date-fns';
import isNil from 'lodash/isNil';
import omitBy from 'lodash/omitBy';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { unstable_serialize } from 'swr/infinite';

import { AppLayout } from 'components/app-layout';
import { Filter } from 'components/filter';
import { NewsCard } from 'components/news-card';
import { NewsLayout } from 'components/news-layout';
import styles from 'components/news-layout/news-layout.module.css';
import { NewsList } from 'components/news-list';
import { PageTitle } from 'components/page-title';
import { PaginationSentinel } from 'components/pagination-sentinel';
import { SEO } from 'components/seo';
import { Select } from 'components/ui/select';
import { NEWS_PER_PAGE } from 'core/news';
import { withSWRFallback } from 'hocs/with-swr-fallback';
import { useNews, getNewsFilters, getNews, getNewsCacheKey } from 'services/api/news-adapter';
import { MONTHS } from 'shared/constants/months';
import { safelyGetQueryParamAsString } from 'shared/helpers/query-params';

import type { SelectOptionCheckHandler } from 'components/ui/select';
import type { NewsFilters } from 'core/news';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

const cx = classNames.bind(styles);

const EMPTY_OPTION = {
  text: '-',
  value: undefined,
};

type NewsProps = Omit<InferGetServerSidePropsType<typeof getServerSideProps>, 'fallback'>

const News = (props: NewsProps) => {
  const { filters } = props;
  const router = useRouter();
  const [month, setMonth] = useState<NewsFilters['month']>(safelyGetQueryParamAsString(router.query.month, undefined));
  const [year, setYear] = useState<NewsFilters['year']>(safelyGetQueryParamAsString(router.query.year, undefined));
  const { isLoading, data, error, setSize } = useNews({ month, year });

  const yearOptions = useMemo(() => {
    let yearsArray: {text: string; value: string }[] = [];

    if (!month) {
      yearsArray = filters.map(({ year }) => ({
        text: year,
        value: year,
      }));
    } else {
      yearsArray = filters
        .filter(({ months }) => months
          .includes(month))
        .map(({ year }) =>({
          text: year,
          value: year,
        }));
    }

    return [
      ...year ? [EMPTY_OPTION] : [],
      ...yearsArray
    ];
  }, [month, year, filters]);

  const selectedYearOption = useMemo(() => (
    yearOptions.find((option) => option.value === year)
  ), [year, yearOptions]);

  const handleYearChange: SelectOptionCheckHandler<NewsFilters['year']> = ({ value }) => {
    setYear(value);
  };

  const monthOptions = useMemo(() => {
    let monthsArrays: {text: string; value: string }[] = [];

    if (!year) {
      const monthsArray = Array.from(
        filters
          .flatMap(({ months }) => months.map(month => (month))));

      const uniqueMonthsArray = new Set(monthsArray);

      monthsArrays = Array.from(uniqueMonthsArray)
        .sort((a, b) => Number(a) - Number(b))
        .map((month) =>({
          text: MONTHS[Number(month)-1],
          value: month,
        }));

    } else {
      monthsArrays = filters
        .find((option) => option.year === year)
        ?.months.map((month) =>({
          text: MONTHS[Number(month)-1],
          value: month,
        })) ?? [];
    }

    return [
      ...month ? [EMPTY_OPTION] : [],
      ...monthsArrays
    ];
  }, [year, month, filters]);

  const selectedMonthOption = useMemo(() => (
    monthOptions.find(({ value }) => value === month)
  ), [month, monthOptions]);

  const handleMonthChange: SelectOptionCheckHandler<NewsFilters['month']> = ({ value }) => {
    setMonth(value);
  };

  const handleLoadMore = useCallback(() => {
    setSize((size) => size + 1);
  }, [setSize]);

  useEffect(() => {
    router.replace({
      query: omitBy({
        month,
        year,
      }, isNil)
    });
  }, [month, year]);

  if (error) {
    return (
      <Error statusCode={500}/>
    );
  }

  return (
    <AppLayout>
      <SEO title="Новости"/>
      <NewsLayout>
        <PageTitle className={cx('title')}>
          Новости
        </PageTitle>
        <Filter className={cx('filter')}>
          <Filter.Field
            className={cx('month-field')}
            caption="Выберите месяц"
            hiddenCaption
          >
            <Select<NewsFilters['month']>
              placeholder="Месяц"
              options={monthOptions}
              selectedOption={selectedMonthOption}
              onChange={handleMonthChange}
            />
          </Filter.Field>
          <Filter.Field
            className={cx('year-field')}
            caption="Выберите год"
            hiddenCaption
          >
            <Select
              placeholder="Год"
              options={yearOptions}
              selectedOption={selectedYearOption}
              onChange={handleYearChange}
            />
          </Filter.Field>
        </Filter>
        <NewsList className={cx('list')}>
          {data?.flat().map((page) => (page.results.map((item) => (
            <NewsList.Item key={item.id}>
              <NewsCard
                title={item.title}
                description={item.description}
                date={item.date && format(new Date(item.date), 'd MMMM yyyy')}
                href={`/news/${item.id}`}
              />
            </NewsList.Item>
          ))))}
          <PaginationSentinel
            pending={isLoading}
            loadMoreCallback={handleLoadMore}
          />
        </NewsList>
      </NewsLayout>
    </AppLayout>
  );
};

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const filters = await getNewsFilters();

  const month = safelyGetQueryParamAsString(query.month, undefined);
  const year = safelyGetQueryParamAsString(query.year, undefined);

  const queryParams = {
    limit: NEWS_PER_PAGE,
    offset: 0,
    month,
    year,
  };

  const news = await getNews(queryParams);

  return {
    props: {
      filters,
      fallback: {
        [unstable_serialize(() => getNewsCacheKey(queryParams))]: [news],
      },
    }
  };
};

export default withSWRFallback<NewsProps>(News);
