import { createContext, useContext } from 'react';

import type { BlogEntry } from 'core/blog';

type BlogContextState = {
  entries: BlogEntry[]
  loadMoreEntries: () => void
  month: Nullable<number>
  setMonth: (value: Nullable<number>) => void
  year: Nullable<number>
  setYear: (value: Nullable<number>) => void
  pending: boolean
  errorOccurred: boolean
}

export const BlogContext = createContext<BlogContextState | undefined>(undefined);

export const useBlog = () => {
  const context = useContext(BlogContext);

  if (context === undefined) {
    throw new Error('The useBlog hook must be used within a BlogProvider');
  }

  return context;
};
