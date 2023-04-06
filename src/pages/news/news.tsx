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

const ALL_MONTH_OPTIONS = MONTHS.map((month, index) => ({
  text: month,
  value: String(index + 1),
}));

type NewsProps = Omit<InferGetServerSidePropsType<typeof getServerSideProps>, 'fallback'>

const News = (props: NewsProps) => {
  const { filters } = props;
  const router = useRouter();
  const [month, setMonth] = useState<NewsFilters['month']>(safelyGetQueryParamAsString(router.query.month, undefined));
  const [year, setYear] = useState<NewsFilters['year']>(safelyGetQueryParamAsString(router.query.year, undefined));
  const { isLoading, data, error, setSize } = useNews({ month, year });

  const yearOptions = useMemo(() => [
    ...year ? [EMPTY_OPTION] : [],
    ...filters.map(({ year }) => ({
      text: year,
      value: year,
    })),
  ], [year]);

  const selectedYearOption = useMemo(() => (
    yearOptions.find((option) => option.value === year)
  ), [year]);

  const handleYearChange: SelectOptionCheckHandler<NewsFilters['year']> = ({ value }) => {
    const shouldResetMonth = !value || (month && !filters.find(({ year }) => year === value)?.months.includes(month));

    setYear(value);

    if (shouldResetMonth) {
      setMonth(undefined);
    }
  };

  const monthOptions = useMemo(() => {
    const availableMonths = year === null
      ? ALL_MONTH_OPTIONS.map(({ value }) => value)
      : filters.find((filter) => filter.year === year)?.months;

    return [
      ...month ? [EMPTY_OPTION] : [],
      ...ALL_MONTH_OPTIONS.filter((option) => option.value === null || availableMonths?.includes(option.value)),
    ];
  }, [year, month]);

  const selectedMonthOption = useMemo(() => (
    monthOptions.find(({ value }) => value === month)
  ), [month]);

  const handleMonthChange: SelectOptionCheckHandler<NewsFilters['month']> = ({ value }) => {
    setMonth(value);
  };

  const handleLoadMore = useCallback(() => {
    setSize((size) => size + 1);
  }, []);

  useEffect(() => {
    router.replace({
      query: omitBy({
        month: (month && year) ? month : null,
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
    ...month && year ? { month } : {},
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
