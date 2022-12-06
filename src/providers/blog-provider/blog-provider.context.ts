import { createContext, useContext } from 'react';

import type { BlogEntry } from 'shared/types/domain';
import type { BlogState } from './blog-provider';
import type { Nullable } from 'shared/types';

type BlogContextState = {
  setPreloadedState: (value: Partial<BlogState>) => void
  entries: BlogEntry[]
  hasMoreEntries: boolean
  handleShouldLoadEntries: () => void
  selectedMonth?: Nullable<number>
  setSelectedMonth: (value: Nullable<number>) => void
  selectedYear?: Nullable<number>
  setSelectedYear: (value: Nullable<number>) => void
  pending: boolean
  errorCode?: number
}

export const BlogContext = createContext<BlogContextState | undefined>(undefined);

export const useBlog = () => {
  const context = useContext(BlogContext);

  if (context === undefined) {
    throw new Error('The useBlog hook must be used within a BlogProvider');
  };

  return context;
};
