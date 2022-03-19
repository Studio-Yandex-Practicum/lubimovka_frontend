import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import { useMemo, useEffect } from 'react';
import classNames from 'classnames/bind';

import { AppLayout } from 'components/app-layout/index';
import { BlogEntryList } from 'components/blog-entry-list';
import { BlogCard } from 'components/ui/blog-card';
import { Filter } from 'components/filter';
import { Select, SelectOption } from 'components/select';
import { BlogLayout } from 'components/blog-layout';
import { PageTitle } from 'components/page-title';
import { Link } from 'components/ui/link';
import { useBlog } from 'providers/blog-provider';
import { useIntersection } from 'shared/hooks/use-intersection';
import { fetcher } from 'shared/fetcher';
import { months } from 'shared/constants/months';
import { entriesPerPage } from 'shared/constants/blog';

import type { BlogState } from 'providers/blog-provider';
import type { BlogEntry } from 'shared/types/domain';
import type { PaginatedBlogItemListOutputList, BlogItemListOutput } from 'api-typings';

import styles from 'components/blog-layout/blog-layout.module.css';

const CALL_TO_ACTION_EMAIL = 'critics@lubimovka.ru';

const cx = classNames.bind(styles);

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

  const [bottomBoundaryRef, shouldLoadEntries] = useIntersection<HTMLLIElement>({ threshold: 1 });
  const selectedMonthOption = useMemo(() => monthOptions.find(({ value }) => value === selectedMonth), [selectedMonth]);
  const selectedYearOption = useMemo(() => yearOptions.find(({ value }) => value === selectedYear), [selectedYear]);
  const lastEntryIndex = useMemo(() => entries.length - 1, [entries]);

  const handleMonthChange = ({ value }: SelectOption<number>) => {
    setSelectedMonth(value);
  };

  const handleYearChange = ({ value }: SelectOption<number>) => {
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
          под руководством Натальи Дубашинской и Полины Пхор.
        </BlogLayout.Description>
        <BlogLayout.CallToAction>
          Если вы хотите стать автором, пишите на
          {' '}
          <Link href={`mailto:${CALL_TO_ACTION_EMAIL}`}>
            {CALL_TO_ACTION_EMAIL}
          </Link>
        </BlogLayout.CallToAction>
        <BlogLayout.Filter>
          <Filter>
            <Filter.Field className={cx('month-field')}>
              <Select<number>
                placeholder="Месяц"
                options={monthOptions}
                selectedOption={selectedMonthOption}
                onChange={handleMonthChange}
              />
            </Filter.Field>
            <Filter.Field className={cx('year-field')}>
              <Select<number>
                placeholder="Год"
                options={yearOptions}
                selectedOption={selectedYearOption}
                onChange={handleYearChange}
              />
            </Filter.Field>
          </Filter>
        </BlogLayout.Filter>
        <BlogLayout.Main>
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
