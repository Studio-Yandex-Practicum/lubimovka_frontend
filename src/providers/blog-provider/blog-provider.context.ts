import { createContext, useContext } from 'react';

import type { BlogEntry } from 'shared/types/domain';
import type { BlogState } from './blog-provider';

type BlogContextState = {
  setPreloadedState: (value: Partial<BlogState>) => void
  entries: BlogEntry[]
  hasMoreEntries: boolean
  handleShouldLoadEntries: () => void
  selectedMonth?: number
  setSelectedMonth: (value: number) => void
  selectedYear?: number
  setSelectedYear: (value: number) => void
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
