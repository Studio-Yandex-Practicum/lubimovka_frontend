import classNames from 'classnames/bind';
import isNil from 'lodash/isNil';
import omitBy from 'lodash/omitBy';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { useMemo, useState, useEffect, useCallback } from 'react';
import { unstable_serialize } from 'swr/infinite';

import { AppLayout } from 'components/app-layout/index';
import { BlogEntryCard } from 'components/blog-entry-card';
import { BlogEntryList } from 'components/blog-entry-list';
import { BlogLayout } from 'components/blog-layout';
import styles from 'components/blog-layout/blog-layout.module.css';
import { CallToEmail } from 'components/call-to-email';
import { Filter } from 'components/filter';
import { PageTitle } from 'components/page-title';
import { PaginationSentinel } from 'components/pagination-sentinel';
import { SEO } from 'components/seo';
import { Select } from 'components/ui/select';
import { BLOG_ENTRIES_PER_PAGE } from 'core/blog';
import { withSWRFallback } from 'hocs/with-swr-fallback';
import { useBlog, fetchBlogFilters, fetchBlogEntries, getBlogEntriesCacheKey } from 'services/api/blog-adapter';
import { useSettings } from 'services/api/settings-adapter';
import { MONTHS } from 'shared/constants/months';
import { safelyGetQueryParamAsString } from 'shared/helpers/query-params';

import type { SelectOptionCheckHandler } from 'components/ui/select';
import type { BlogFilters } from 'core/blog';
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

type BlogProps = Omit<InferGetServerSidePropsType<typeof getServerSideProps>, 'fallback'>

const Blog: React.FC<BlogProps> = (props) => {
  const { filters } = props;
  const router = useRouter();
  const [month, setMonth] = useState<BlogFilters['month']>(safelyGetQueryParamAsString(router.query.month));
  const [year, setYear] = useState<BlogFilters['year']>(safelyGetQueryParamAsString(router.query.year));
  const { isLoading, data, error, setSize } = useBlog({ month, year });
  const { settings } = useSettings();

  const callToActionEmail = settings?.emailAddresses.forBlogAuthors;

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

  const handleYearChange: SelectOptionCheckHandler<BlogFilters['year']> = ({ value }) => {
    const shouldResetMonth = !value || (month && !filters.find(({ year }) => year === value)?.months.includes(month));

    setYear(value);

    if (shouldResetMonth) {
      setMonth(undefined);
    }
  };

  const monthOptions = useMemo(() => {
    const availableMonths = year
      ? filters.find((filter) => filter.year === year)?.months
      : ALL_MONTH_OPTIONS.map(({ value }) => value);

    return [
      ...month ? [EMPTY_OPTION] : [],
      ...ALL_MONTH_OPTIONS.filter((option) => !option.value || availableMonths?.includes(option.value)),
    ];
  }, [year, month]);

  const selectedMonthOption = useMemo(() => (
    monthOptions.find(({ value }) => value === month)
  ), [month]);

  const handleMonthChange: SelectOptionCheckHandler<BlogFilters['month']> = ({ value }) => {
    setMonth(value);
  };

  const handleLoadMore = useCallback(() => {
    setSize((size) => size + 1);
  }, []);

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
                <Select<BlogFilters['month']>
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
                <Select<BlogFilters['year']>
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
              {data?.flat().map((page) => (page.results.map((entry) => (
                <BlogEntryList.Item key={entry.id}>
                  <BlogEntryCard
                    authorFullName={entry.authorFullName}
                    authorUrl={entry.authorUrl}
                    title={entry.title}
                    description={entry.description}
                    image={entry.image}
                    viewUrl={`/blog/${entry.id}`}
                  />
                </BlogEntryList.Item>
              ))))}
            </BlogEntryList>
            <PaginationSentinel
              pending={isLoading}
              loadMoreCallback={handleLoadMore}
            />
          </BlogLayout.Main>
        </BlogLayout>
      </AppLayout>
    </>
  );
};

export default withSWRFallback<BlogProps>(Blog);

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const filters = await fetchBlogFilters();

  const month = safelyGetQueryParamAsString(query.month, undefined);
  const year = safelyGetQueryParamAsString(query.year, undefined);

  const params = {
    limit: BLOG_ENTRIES_PER_PAGE,
    month,
    year,
  };

  const { results: entries } = await fetchBlogEntries(params);

  return {
    props: {
      filters,
      fallback: {
        [unstable_serialize(() => getBlogEntriesCacheKey(params))]: [entries],
      }
    }
  };
};
