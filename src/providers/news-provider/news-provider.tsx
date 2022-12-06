import { FC, useState, useReducer, useEffect } from 'react';
import { objectToQueryString } from '@funboxteam/diamonds';

import { fetcher } from 'services/fetcher';
import { useDidMountEffect } from 'shared/hooks/use-did-mount-effect';
import { omit } from 'shared/helpers/omit';
import { isNil } from 'shared/helpers/is-nil';
import { entriesPerPage } from 'shared/constants/news';
import { NewsContext } from './news-provider.context';

import type { PaginatedNewsItemListList, NewsItemList } from 'api-typings';
import type { Nullable } from 'shared/types';

const defaultNewsState = {
  entries: [] as NewsItemList[],
  offset: 0,
  hasMoreEntries: false,
};

enum NewsActionType {
  AddNews,
  SetOffset,
  SetHasMoreEntries,
  IncreaseOffset,
  Reset,
  SetPreloadedNews,
}

type NewsState = typeof defaultNewsState;
type NewsAction = { type: NewsActionType.AddNews, payload: NewsState['entries']}
  | { type: NewsActionType.SetOffset, payload: NewsState['offset'] }
  | { type: NewsActionType.SetHasMoreEntries, payload: NewsState['hasMoreEntries'] }
  | { type: NewsActionType.IncreaseOffset }
  | { type: NewsActionType.Reset }
  | { type: NewsActionType.SetPreloadedNews, payload: Partial<NewsState> }

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
    return defaultNewsState;
  case NewsActionType.SetPreloadedNews:
    return {
      ...defaultNewsState,
      ...action.payload,
    };
  default:
    return state;
  };
};

interface NewsProviderProps {
  preloadedNewsState?: Partial<NewsState>
}

export const NewsProvider: FC<NewsProviderProps> = (props) => {
  const { children, preloadedNewsState } = props;

  const [news, dispatch] = useReducer(newsReducer, {
    ...defaultNewsState,
    ...preloadedNewsState,
  });
  const [selectedMonth, setSelectedMonth] = useState<Nullable<number>>(null);
  const [selectedYear, setSelectedYear] = useState<Nullable<number>>(null);
  const [filterWasChanged, setFilterWasChanged] = useState(false);
  const [pending, setPending] = useState(false);

  const fetchNews = async () => {
    const params = omit({
      offset: news.offset,
      limit: entriesPerPage,
      month: selectedMonth,
      year: selectedYear,
    }, isNil);
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

  const handleShouldLoadEntries = () => {
    dispatch({ type: NewsActionType.IncreaseOffset });
  };

  useEffect(() => {
    if (!preloadedNewsState) return;

    dispatch({ type: NewsActionType.SetPreloadedNews, payload: preloadedNewsState });
  }, [preloadedNewsState]);

  useDidMountEffect(() => {
    if (selectedMonth && !selectedYear) {
      return;
    }
    setFilterWasChanged(true);
    dispatch({ type: NewsActionType.Reset });
  }, [selectedMonth, selectedYear]);

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
    handleShouldLoadEntries,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
    pending,
  };

  return (
    <NewsContext.Provider value={contextValue}>
      {children}
    </NewsContext.Provider>
  );
};
