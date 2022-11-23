import { createContext, useContext } from 'react';

import type { NewsItemList } from 'api-typings';

type NewsContext = {
  entries: NewsItemList[]
  hasMoreEntries: boolean
  handleShouldLoadEntries: () => void
  selectedMonth?: Nullable<number>,
  setSelectedMonth: (value: Nullable<number>) => void
  selectedYear?: Nullable<number>,
  setSelectedYear: (value: Nullable<number>) => void
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
