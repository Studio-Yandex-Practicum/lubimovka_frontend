import { useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';
import { format } from 'date-fns';

import { AppLayout } from 'components/app-layout';
import { NewsLayout } from 'components/news-layout';
import { PageTitle } from 'components/page-title';
import { Filter } from 'components/filter';
import { Select } from 'components/ui/select';
import { NewsList } from 'components/news-list';
import { NewsCard } from 'components/news-card';
import { SEO } from 'components/seo';
import { useNews } from 'providers/news-provider';
import { useIntersection } from 'shared/hooks/use-intersection';
import { fetcher } from 'services/fetcher';
import { months } from 'shared/constants/months';
import { entriesPerPage } from 'shared/constants/news';
import { InternalServerError } from 'shared/helpers/internal-server-error';

import type { InferGetServerSidePropsType } from 'next';
import type { PaginatedNewsItemListList, NewsItemYearsMonthsOutput } from '__generated__/api-typings';
import type { SelectOptionCheckHandler } from 'components/ui/select';

import styles from 'components/news-layout/news-layout.module.css';

const cx = classNames.bind(styles);

const defaultMonthOptions = months.map((month, index) => ({
  text: month,
  value: index + 1,
}));

const News = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { filters } = props;
  const lastYear = filters[0].year;
  const {
    entries,
    handleShouldLoadEntries,
    hasMoreEntries,
    selectedMonth,
    setSelectedMonth,
    selectedYear = lastYear,
    setSelectedYear,
    pending,
  } = useNews();

  const [bottomBoundaryRef, shouldLoadEntries] = useIntersection<HTMLLIElement>();

  const yearOptions = filters.map(({ year }) => ({
    text: year.toString(),
    value: year,
  }));

  const selectedYearOption = useMemo(() => (
    yearOptions.find(({ value }) => value === (selectedYear))
  ), [selectedYear]);

  let monthOptions = defaultMonthOptions;

  if (selectedYear) {
    const filteredMonths = filters.find(({ year }) => year === selectedYear)!.months;
    monthOptions = defaultMonthOptions.filter(({ value }) => filteredMonths.includes(value));
  }

  const selectedMonthOption = useMemo(() => (
    monthOptions.find(({ value }) => value === selectedMonth)
  ), [selectedMonth]);

  const lastNewsIndex = useMemo(() => entries.length - 1, [entries]);

  const handleMonthChange: SelectOptionCheckHandler<number> = ({ value }) => {
    if (selectedMonth === value) return;

    setSelectedMonth(value);
  };

  const handleYearChange: SelectOptionCheckHandler<number> = ({ value }) => {
    if (selectedYear === value) return;

    const shouldResetMonth = !value || (selectedMonth && !filters.find(({ year }) => year === value)!.months.includes(selectedMonth));

    setSelectedYear(value);
    if (shouldResetMonth) {
      setSelectedMonth(null);
    }
  };

  useEffect(() => {
    if (!pending && shouldLoadEntries && hasMoreEntries) {
      handleShouldLoadEntries();
    }
  }, [pending, hasMoreEntries, shouldLoadEntries]);

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
            <Select<number>
              clearable
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
            <Select<number>
              clearable
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
                title={entry.title}
                description={entry.description}
                date={entry.pub_date && format(new Date(entry.pub_date), 'd MMMM yyyy')}
                href={`/news/${entry.id}`}
              />
            </NewsList.Item>
          ))}
        </NewsList>
        {!entries.length && !pending
          && (
            <p className={cx('no-result')}>
              Ничего не найдено.
            </p>
          )
        }
      </NewsLayout>
    </AppLayout>
  );
};

export const getServerSideProps = async () => {
  let entries;
  let next;
  let filters;

  try {
    filters = await fetcher<NewsItemYearsMonthsOutput[]>('/news/years-months/');
    ({ results: entries, next } = await fetcher<PaginatedNewsItemListList>(`/news/?limit=${entriesPerPage}`));
  } catch {
    throw new InternalServerError();
  }

  return {
    props: {
      filters,
      preloadedNewsState: {
        entries,
        hasMoreEntries: !!next,
      }
    }
  };
};

export default News;
