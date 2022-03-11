import { createContext, useContext } from 'react';

import { SelectOption } from 'components/select';
import { NewsItemList } from 'api-typings';

export type NewsContext = {
  entries: NewsItemList[]
  hasMoreEntries: boolean
  setServerSideEntries: (value: { entries: NewsItemList[], hasMoreEntries: boolean }) => void
  handleShouldLoadEntries: () => void
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
