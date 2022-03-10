import { createContext, useContext, Dispatch } from 'react';

import { SelectOption } from 'components/select';
import { NewsItemList } from 'api-typings';

export type NewsContext = {
  news: NewsItemList[]
  setNews: Dispatch<NewsItemList[]>
  handleShouldLoadEntries: () => void
  hasMoreEntries: boolean
  selectedMonthOption?: SelectOption
  handleMonthChange: (value: SelectOption) => void
  selectedYearOption?: SelectOption
  handleYearChange: (value: SelectOption) => void
  pending: boolean,
}

export const NewsContext = createContext<NewsContext | undefined>(undefined);

export const useNews = (): NewsContext => {
  const context = useContext(NewsContext);

  if (context === undefined) {
    throw new Error('The useNews hook must be used within a NewsProvider');
  }

  return context;
};
