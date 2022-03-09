import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';
import { objectToQueryString } from '@funboxteam/diamonds';

import { AppLayout } from 'components/app-layout';
import { NewsLayout } from 'components/news-layout';
import { PageTitle } from 'components/page-title';
import { Filter } from 'components/filter';
import { Select, SelectOption } from 'components/select';
import { NewsList } from 'components/news-list';
import { NewsCard } from 'components/ui/news-card';
import { useDidMountEffect } from 'shared/hooks/use-did-mount-effect';
import { useIntersection } from 'shared/hooks/use-intersection';
import { fetcher } from 'shared/fetcher';
import { omitEmptyProperties } from 'shared/helpers/omit-empty-properties';
import { months } from 'shared/constants/months';
import { PaginatedNewsItemListList, NewsItemList } from 'api-typings';

import styles from 'components/news-layout/news-layout.module.css';

const ENTRIES_PER_PAGE = 5;

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
  const [news, setNews] = useState<NewsItemList[]>(props.news);
  const [selectedMonthOption, setSelectedMonthOption] = useState<SelectOption>();
  const [selectedYearOption, setSelectedYearOption] = useState<SelectOption>();
  const [offset, setOffset] = useState(0);
  const [hasMoreEntries, setHasMoreEntries] = useState(props.hasMoreEntries);
  const [filterWasChanged, setFilterWasChanged] = useState(false);
  const [pending, setPending] = useState(false);
  const [bottomBoundaryRef, shouldLoadEntries] = useIntersection<HTMLLIElement>({ threshold: 1 });
  const lastNewsIndex = useMemo(() => news.length - 1, [news]);

  const handleMonthChange = (value: SelectOption) => {
    setSelectedMonthOption(value);
  };

  const handleYearChange = (value: SelectOption) => {
    setSelectedYearOption(value);
  };

  const handleShouldLoadEntries = () => {
    setOffset((offset) => offset + ENTRIES_PER_PAGE);
  };

  const fetchNews = async ()  => {
    const params = {
      limit: ENTRIES_PER_PAGE,
      offset,
      month: selectedMonthOption?.value,
      year: selectedYearOption?.value,
    };
    const filteredParams = omitEmptyProperties(params);
    let response;

    try {
      response = await fetcher<PaginatedNewsItemListList>(`/news/${objectToQueryString(filteredParams)}`);
    } catch {
      // TODO: обработать ошибку
      return;
    }

    const {
      results,
      next
    } = response;

    if (results) {
      setNews((news) => [
        ...news,
        ...results,
      ]);
    }
    setHasMoreEntries(!!next);
    setPending(false);
  };

  useDidMountEffect(() => {
    if (!selectedYearOption?.value) {
      return;
    }
    setNews([]);
    setOffset(0);
    setFilterWasChanged(true);
    setHasMoreEntries(true);
  }, [selectedMonthOption, selectedYearOption]);

  useDidMountEffect(() => {
    if (!offset && !filterWasChanged) {
      return;
    }
    setPending(true);
    fetchNews();
    if (filterWasChanged) {
      setFilterWasChanged(false);
    }
  }, [offset, filterWasChanged]);

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
          {news.map((entry, index) => (
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

export const getServerSideProps: GetServerSideProps = async () => {
  let response;

  try {
    response = await fetcher<PaginatedNewsItemListList>(`/news/?limit=${ENTRIES_PER_PAGE}`);
  } catch {
    return {
      props: {
        errorCode: 500,
      }
    };
  }

  return {
    props: {
      news: response.results,
      hasMoreEntries: !!response.next,
    }
  };
};

export default News;
