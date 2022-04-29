import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import { useMemo, useEffect } from 'react';
import classNames from 'classnames/bind';

import { AppLayout } from 'components/app-layout/index';
import { BlogEntryList } from 'components/blog-entry-list';
import { BlogCard } from 'components/ui/blog-card';
import { Filter } from 'components/filter';
import { Select } from 'components/select';
import { BlogLayout } from 'components/blog-layout';
import { PageTitle } from 'components/page-title';
import { Spinner } from 'components/spinner';
import { CallToEmail } from 'components/call-to-email';
import { useBlog } from 'providers/blog-provider';
import { usePersistentData } from 'providers/persistent-data-provider';
import { useIntersection } from 'shared/hooks/use-intersection';
import { getYearRange } from 'shared/helpers/get-year-range';
import { fetcher } from 'shared/fetcher';
import { months } from 'shared/constants/months';
import { entriesPerPage } from 'shared/constants/blog';

import type { BlogState } from 'providers/blog-provider';
import type { BlogEntry } from 'shared/types/domain';
import type { PaginatedBlogItemListOutputList, BlogItemListOutput } from 'api-typings';
import type { SelectOptionCheckHandler } from 'components/select';

import styles from 'components/blog-layout/blog-layout.module.css';

const cx = classNames.bind(styles);

const fromYear = 2013;
const monthOptions = months.map((month, index) => ({
  text: month,
  value: index + 1,
}));
const yearOptions = getYearRange(fromYear).map((year) => ({
  text: year.toString(),
  value: year,
}));

const Blog = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    setPreloadedState,
    entries,
    hasMoreEntries,
    handleShouldLoadEntries,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
    pending,
    errorCode,
  } = useBlog();
  const { settings } = usePersistentData();
  const [bottomBoundaryRef, shouldLoadEntries] = useIntersection<HTMLLIElement>({ threshold: 1 });
  const selectedMonthOption = useMemo(() => monthOptions.find(({ value }) => value === selectedMonth), [selectedMonth]);
  const selectedYearOption = useMemo(() => yearOptions.find(({ value }) => value === selectedYear), [selectedYear]);
  const lastEntryIndex = useMemo(() => entries.length - 1, [entries]);
  const callToActionEmail = settings?.emailAddresses.forAuthors;

  const handleMonthChange: SelectOptionCheckHandler<number> = ({ value }) => {
    if (selectedMonth === value) return;

    setSelectedMonth(value);
  };

  const handleYearChange: SelectOptionCheckHandler<number> = ({ value }) => {
    if (selectedYear === value) return;

    setSelectedYear(value);
  };

  useEffect(() => {
    if (!entries.length && props.entries) {
      setPreloadedState({
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
      <BlogLayout>
        <BlogLayout.Title>
          <PageTitle>
            Блог Любимовки
          </PageTitle>
        </BlogLayout.Title>
        <BlogLayout.Description>
          Журналисты, театроведы, критики, искусствоведы и студенты профильных вузов ведут журнал фестиваля Любимовка
          под руководством Анны Юсиной.
        </BlogLayout.Description>
        {callToActionEmail && (
          <BlogLayout.CallToAction>
            <CallToEmail
              type="blog"
              description="Если вы хотите стать автором, пишите на "
              email={callToActionEmail}
            />
          </BlogLayout.CallToAction>
        )}
        <BlogLayout.Filter>
          <Filter>
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
              caption="Выберите месяц"
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
        </BlogLayout.Filter>
        <BlogLayout.Main>
          {pending && (
            <Spinner className={cx('spinner')}/>
          )}
          {!entries.length && !pending && (
            <p className={cx('no-result')}>
              Ничего не найдено.
            </p>
          )}
          <BlogEntryList>
            {entries.map((entry, index) => (
              <BlogEntryList.Item
                key={entry.id}
                {...index === lastEntryIndex ? {
                  ref: bottomBoundaryRef,
                } : {}}
              >
                <BlogCard
                  id={entry.id}
                  image={entry.cover}
                  author={entry.author}
                  heading={entry.title}
                  description={entry.description}
                />
              </BlogEntryList.Item>
            ))}
          </BlogEntryList>
        </BlogLayout.Main>
      </BlogLayout>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps<Partial<BlogState>> = async () => {
  let response;

  try {
    response = await fetcher<PaginatedBlogItemListOutputList>(`/blog/?limit=${entriesPerPage}`);
  } catch {
    return {
      props: {
        errorCode: 500,
      }
    };
  }

  return {
    props: {
      entries: response.results ? toBlogEntries(response.results) : [],
      hasMoreEntries: !!response.next,
    }
  };
};

export default Blog;

function toBlogEntries(array: BlogItemListOutput[]): BlogEntry[] {
  return array.map(({
    id,
    pub_date,
    title,
    description,
    author_url_title,
    image
  }) => ({
    id,
    publicationDate: pub_date,
    title,
    description,
    author: author_url_title,
    cover: image,
  }));
};
