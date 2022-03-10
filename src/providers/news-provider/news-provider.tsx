import { FC, useState } from 'react';
import { objectToQueryString } from '@funboxteam/diamonds';

import { SelectOption } from 'components/select';
import { fetcher } from 'shared/fetcher';
import { omitEmptyProperties } from 'shared/helpers/omit-empty-properties';
import { useDidMountEffect } from 'shared/hooks/use-did-mount-effect';
import { NewsContext } from './news-provider.context';
import { PaginatedNewsItemListList, NewsItemList } from 'api-typings';

const ENTRIES_PER_PAGE = 5;

export const NewsProvider: FC = (props) => {
  const { children } = props;
  const [news, setNews] = useState<NewsItemList[]>([]);
  const [selectedMonthOption, setSelectedMonthOption] = useState<SelectOption>();
  const [selectedYearOption, setSelectedYearOption] = useState<SelectOption>();
  const [offset, setOffset] = useState(0);
  const [hasMoreEntries, setHasMoreEntries] = useState(true);
  const [filterWasChanged, setFilterWasChanged] = useState(false);
  const [pending, setPending] = useState(false);

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

  const handleMonthChange = (value: SelectOption) => {
    setSelectedMonthOption(value);
  };

  const handleYearChange = (value: SelectOption) => {
    setSelectedYearOption(value);
  };

  const handleShouldLoadEntries = () => {
    setOffset((offset) => offset + ENTRIES_PER_PAGE);
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

  const contextValue = {
    news,
    setNews,
    handleShouldLoadEntries,
    hasMoreEntries,
    selectedMonthOption,
    handleMonthChange,
    selectedYearOption,
    handleYearChange,
    pending,
  };

  return (
    <NewsContext.Provider
      value={contextValue}
    >
      {children}
    </NewsContext.Provider>
  );
};
