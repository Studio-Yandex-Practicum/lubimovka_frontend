import classNames from 'classnames/bind';
import Error from 'next/error';
import { useEffect,useMemo } from 'react';

import { AppLayout } from 'components/app-layout/index';
import { BlogEntryList } from 'components/blog-entry-list';
import { BlogLayout } from 'components/blog-layout';
import styles from 'components/blog-layout/blog-layout.module.css';
import { CallToEmail } from 'components/call-to-email';
import { Filter } from 'components/filter';
import { PageTitle } from 'components/page-title';
import { PaginationSentinel } from 'components/pagination-sentinel';
import { SEO } from 'components/seo';
import { Spinner } from 'components/spinner';
import { BlogCard } from 'components/ui/blog-card';
import { Select } from 'components/ui/select';
import { useBlog } from 'providers/blog-provider';
import { usePersistentData } from 'providers/persistent-data-provider';
import { getBlogEntries } from 'services/api/blog';
import { months } from 'shared/constants/months';
import { getYearRange } from 'shared/helpers/get-year-range';
import { isNonEmpty } from 'shared/helpers/is-non-empty';
import { useIntersection } from 'shared/hooks/use-intersection';

import type { SelectOptionCheckHandler } from 'components/ui/select';
import type { GetServerSideProps } from 'next';

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

const Blog = () => {
  const {
    entries,
    loadMoreEntries,
    month,
    setMonth,
    year,
    setYear,
    pending,
    errorOccurred,
  } = useBlog();
  const { settings } = usePersistentData();
  const [paginationSentinelRef, shouldLoadEntries] = useIntersection<HTMLLIElement>();
  const selectedMonthOption = useMemo(() => monthOptions.find(({ value }) => value === month), [month]);
  const selectedYearOption = useMemo(() => yearOptions.find(({ value }) => value === year), [year]);
  const callToActionEmail = settings?.emailAddresses.forBlogAuthors;

  const handleMonthChange: SelectOptionCheckHandler<number> = ({ value }) => {
    if (month === value) {
      return;
    }

    setMonth(value);
  };

  const handleYearChange: SelectOptionCheckHandler<number> = ({ value }) => {
    if (year === value) {
      return;
    }

    setYear(value);
  };

  useEffect(() => {
    if (!pending && shouldLoadEntries) {
      loadMoreEntries();
    }
  }, [shouldLoadEntries]);

  if (errorOccurred) {
    return (
      <Error statusCode={500}/>
    );
  }

  return (
    <>
      <SEO title="Блог"/>
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
            {!pending && (isNonEmpty(entries) ? (
              <BlogEntryList>
                {entries.map((entry) => (
                  <BlogEntryList.Item key={entry.id}>
                    <BlogCard
                      id={entry.id}
                      image={entry.cover}
                      author={entry.author}
                      heading={entry.title}
                      description={entry.description}
                    />
                  </BlogEntryList.Item>
                ))}
                <PaginationSentinel ref={paginationSentinelRef}/>
              </BlogEntryList>
            ) : (
              <p className={cx('no-result')}>
                Ничего не найдено.
              </p>
            ))}
          </BlogLayout.Main>
        </BlogLayout>
      </AppLayout>
    </>
  );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async () => {
  const { entries, pagination } = await getBlogEntries();

  return {
    props: {
      defaultBlogState: {
        entries,
        pagination,
      }
    }
  };
};
