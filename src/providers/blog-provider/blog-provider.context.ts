import { createContext, useContext } from 'react';

import type { BlogEntryPreview } from 'core/blog';
import type { Pagination } from 'core/pagination';

type BlogContextState = {
  entries: BlogEntryPreview[]
  loadMoreEntries: () => void
  pagination: Pagination
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
