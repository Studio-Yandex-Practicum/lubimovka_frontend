import { FC, useState, useReducer } from 'react';
import { objectToQueryString } from '@funboxteam/diamonds';

import { SelectOption } from 'components/select';
import { fetcher } from 'shared/fetcher';
import { omitEmptyProperties } from 'shared/helpers/omit-empty-properties';
import { useDidMountEffect } from 'shared/hooks/use-did-mount-effect';
import { NewsContext } from './news-provider.context';
import { entriesPerPage } from 'shared/constants/news';
import { PaginatedNewsItemListList, NewsItemList } from 'api-typings';

export const initialNewsState = {
  entries: [] as NewsItemList[],
  offset: 0,
  hasMoreEntries: false,
};

export enum NewsActionType {
  AddNews,
  setServerSideEntries,
  SetOffset,
  SetHasMoreEntries,
  IncreaseOffset,
  Reset,
}

export type NewsState = typeof initialNewsState;
type NewsAction = { type: NewsActionType.AddNews, payload: NewsState['entries']}
  | { type: NewsActionType.SetOffset, payload: NewsState['offset'] }
  | { type: NewsActionType.setServerSideEntries, payload: Pick<NewsState, 'entries' | 'hasMoreEntries'> }
  | { type: NewsActionType.SetHasMoreEntries, payload: NewsState['hasMoreEntries'] }
  | { type: NewsActionType.IncreaseOffset }
  | { type: NewsActionType.Reset }

const newsReducer = (state: NewsState, action: NewsAction) => {
  switch (action.type) {
  case NewsActionType.AddNews:
    return {
      ...state,
      entries: [
        ...state.entries,
        ...action.payload,
      ]
    };
  case NewsActionType.setServerSideEntries:
    return {
      ...state,
      ...action.payload,
    };
  case NewsActionType.SetOffset:
    return {
      ...state,
      offset: action.payload,
    };
  case NewsActionType.SetHasMoreEntries:
    return {
      ...state,
      hasMoreEntries: action.payload,
    };
  case NewsActionType.IncreaseOffset:
    return {
      ...state,
      offset: state.offset + entriesPerPage,
    };
  case NewsActionType.Reset:
    return initialNewsState;
  default:
    return state;
  };
};

export const NewsProvider: FC = (props) => {
  const { children } = props;
  const [news, dispatch] = useReducer(newsReducer, initialNewsState);
  const [selectedMonthOption, setSelectedMonthOption] = useState<SelectOption>();
  const [selectedYearOption, setSelectedYearOption] = useState<SelectOption>();
  const [filterWasChanged, setFilterWasChanged] = useState(false);
  const [pending, setPending] = useState(false);

  const fetchNews = async ()  => {
    const params = omitEmptyProperties({
      offset: news.offset,
      limit: entriesPerPage,
      month: selectedMonthOption?.value,
      year: selectedYearOption?.value,
    });
    let response;

    try {
      response = await fetcher<PaginatedNewsItemListList>(`/news/${objectToQueryString(params)}`);
    } catch {
      // TODO: обработать ошибку
      return;
    }

    const {
      results,
      next
    } = response;

    if (results) {
      dispatch({ type: NewsActionType.AddNews, payload: results });
    }
    dispatch({ type: NewsActionType.SetHasMoreEntries, payload: !!next });
    setPending(false);
  };

  const setServerSideEntries = (value: Pick<NewsState, 'entries' | 'hasMoreEntries'>) => {
    dispatch({ type: NewsActionType.setServerSideEntries, payload: value });
  };

  const handleMonthChange = (value: SelectOption) => {
    setSelectedMonthOption(value);
  };

  const handleYearChange = (value: SelectOption) => {
    setSelectedYearOption(value);
  };

  const handleShouldLoadEntries = () => {
    dispatch({ type: NewsActionType.IncreaseOffset });
  };

  useDidMountEffect(() => {
    if (!selectedYearOption?.value) {
      return;
    }
    setFilterWasChanged(true);
    dispatch({ type: NewsActionType.Reset });
  }, [selectedMonthOption, selectedYearOption]);

  useDidMountEffect(() => {
    if (!news.offset && !filterWasChanged) {
      return;
    }
    setPending(true);
    fetchNews();
    if (filterWasChanged) {
      setFilterWasChanged(false);
    }
  }, [news.offset, filterWasChanged]);

  const contextValue = {
    entries: news.entries,
    hasMoreEntries: news.hasMoreEntries,
    setServerSideEntries,
    handleShouldLoadEntries,
    selectedMonthOption,
    handleMonthChange,
    selectedYearOption,
    handleYearChange,
    pending,
  };

  return (
    <NewsContext.Provider value={contextValue}>
      {children}
    </NewsContext.Provider>
  );
};
