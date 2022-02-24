import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { objectToQueryString } from '@funboxteam/diamonds';

import { AppLayout } from 'components/app-layout/index';
import { BlogEntryList } from 'components/blog-entry-list';
import { BlogCard } from 'components/ui/blog-card';
import { Filter } from 'components/filter';
import { Select, SelectOption } from 'components/select';
import { BlogLayout } from 'components/blog-layout';
import { PageTitle } from 'components/page-title';
import { InfoLink } from 'components/ui/info-link';
import { useIntersectionObserver } from 'shared/hooks/use-interection-observer';
import { useDidMountEffect } from 'shared/hooks/use-did-mount-effect';
import { fetcher } from 'shared/fetcher';
import { omitEmptyProperties } from 'shared/helpers/omit-empty-properties';
import { PaginatedBlogItemListOutputList, BlogItemListOutput } from 'api-typings';
import { months } from 'shared/constants/months';

import styles from 'components/blog-layout/blog-layout.module.css';

const ENTRIES_PER_PAGE = 3;
const CALL_TO_ACTION_EMAIL = 'critics@lubimovka.ru';

const cx = classNames.bind(styles);

const monthOptions = months.map((month, index) => ({
  text: month,
  value: index,
}));

const yearOptions = [
  { text: '2019', value: 2019 },
];

const Blog = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [blogEntries, setBlogEntries] = useState<BlogItemListOutput[]>(props.blogEntries);
  const [selectedMonthOption, setSelectedMonthOption] = useState<SelectOption>();
  const [selectedYearOption, setSelectedYearOption] = useState<SelectOption>();
  const [offset, setOffset] = useState(0);
  const [hasMoreEntries, setHasMoreEntries] = useState(props.hasMoreEntries);
  const lastEntryRef = useRef<HTMLLIElement>(null);
  const isLastEntryIntersecting = useIntersectionObserver(lastEntryRef);

  const fetchBlogEntries = async ()  => {
    const params = {
      limit: ENTRIES_PER_PAGE,
      offset,
      month: selectedMonthOption?.value,
      year: selectedYearOption?.value,
    };
    const filteredParams = omitEmptyProperties(params);
    let response;

    try {
      response = await fetcher<PaginatedBlogItemListOutputList>(`/blog/${objectToQueryString(filteredParams)}`);
    } catch {
      // TODO: обработать ошибку
      return;
    }

    const {
      results,
      next
    } = response;

    if (results) {
      setBlogEntries((blogEntries) => [
        ...blogEntries,
        ...results,
      ]);
    }
    setHasMoreEntries(!!next);
  };

  const handleMonthChange = (value: SelectOption) => {
    setSelectedMonthOption(value);
  };

  const handleYearChange = (value: SelectOption) => {
    setSelectedYearOption(value);
  };

  const isLastEntry = (index: number) => index === blogEntries.length - 1;

  useEffect(() => {
    if (hasMoreEntries && isLastEntryIntersecting) {
      setOffset((offset) => offset + ENTRIES_PER_PAGE);
    }
  }, [isLastEntryIntersecting]);

  useDidMountEffect(() => {
    if (!selectedYearOption?.value) {
      return;
    }
    setBlogEntries([]);
    setOffset(0);
    setHasMoreEntries(true);
  }, [selectedMonthOption, selectedYearOption]);

  useDidMountEffect(() => {
    fetchBlogEntries();
  }, [offset]);

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
          <InfoLink
            label={CALL_TO_ACTION_EMAIL}
            textDecoration="underline"
            href={`mailto:${CALL_TO_ACTION_EMAIL}`}
          />
        </BlogLayout.CallToAction>
        <BlogLayout.Filter>
          <Filter>
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
        </BlogLayout.Filter>
        <BlogLayout.Main>
          <BlogEntryList>
            {blogEntries.map((card, index) => (
              <BlogEntryList.Item
                key={card.id}
                {...isLastEntry(index) ? {
                  ref: lastEntryRef
                } : {}}
              >
                <BlogCard
                  image={card.image}
                  author={card.author_url_title}
                  heading={card.title}
                  description={card.description}
                  id={card.id}
                />
              </BlogEntryList.Item>
            ))}
          </BlogEntryList>
        </BlogLayout.Main>
      </BlogLayout>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let response;

  try {
    response = await fetcher<PaginatedBlogItemListOutputList>(`/blog/?limit=${ENTRIES_PER_PAGE}`);
  } catch {
    return {
      props: {
        errorCode: 500,
      }
    };
  }

  return {
    props: {
      blogEntries: response.results,
      hasMoreEntries: !!response.next,
    }
  };
};

export default Blog;
