import Error from 'next/error';
import { useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';

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
import { format } from 'shared/helpers/format-date';
import { getYearRange } from 'shared/helpers/get-year-range';

import type { InferGetServerSidePropsType } from 'next';
import type { PaginatedNewsItemListList } from 'api-typings';
import type { SelectOptionCheckHandler } from 'components/select';

import styles from 'components/news-layout/news-layout.module.css';

const cx = classNames.bind(styles);

// TODO: Получать список лет из API
const fromYear = 2013;
const monthOptions = months.map((month, index) => ({
  text: month,
  value: index + 1,
}));
const yearOptions = getYearRange(fromYear).map((year) => ({
  text: year.toString(),
  value: year,
}));

const News = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    errorCode,
  } = props;
  const {
    entries,
    handleShouldLoadEntries,
    hasMoreEntries,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
    pending,
  } = useNews();

  const [bottomBoundaryRef, shouldLoadEntries] = useIntersection<HTMLLIElement>({ threshold: 1 });

  const selectedMonthOption = useMemo(() => (
    monthOptions.find(({ value }) => value === selectedMonth)
  ), [selectedMonth]);

  const selectedYearOption = useMemo(() => (
    yearOptions.find(({ value }) => value === selectedYear)
  ), [selectedYear]);

  const lastNewsIndex = useMemo(() => entries.length - 1, [entries]);

  const handleMonthChange: SelectOptionCheckHandler<number> = ({ value }) => {
    if (selectedMonth === value) return;

    setSelectedMonth(value);
  };

  const handleYearChange: SelectOptionCheckHandler<number> = ({ value }) => {
    if (selectedYear === value) return;

    setSelectedYear(value);
  };

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
        {((entries && entries.length) || 0) > 0 ? (
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
                  date={entry.pub_date && format('d MMMM yyyy', new Date(entry.pub_date))}
                  href={`/news/${entry.id}`}
                />
              </NewsList.Item>
            ))}
          </NewsList>
        ) : (
          <p className={cx('no-result')}>
            Ничего не найдено. Попробуйте изменить параметры поиска.
          </p>
        )
        }
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
      preloadedNewsState: {
        entries: response.results,
        hasMoreEntries: !!response.next,
      }
    }
  };
};

export default News;
