import { useState, useCallback, useEffect } from 'react';

import { entriesPerPage } from 'core/blog';
import { getBlogEntries } from 'services/api/blog';
import { useEffectAfterMount } from 'shared/hooks/use-effect-after-mount';

import { BlogContext } from './blog-provider.context';

import type { BlogEntryPreview } from 'core/blog';
import type { Pagination } from 'core/pagination';

interface BlogProviderProps {
  preloadedState?: {
    entries: BlogEntryPreview[]
    pagination: Pagination
  }
}

export const BlogProvider: React.FC<BlogProviderProps> = (props) => {
  const { children, preloadedState } = props;
  const [entries, setEntries] = useState<BlogEntryPreview[]>([]);
  const [pagination, setPagination] = useState({ offset: 0, total: 0 });
  const [month, setMonth] = useState<Nullable<number>>(null);
  const [year, setYear] = useState<Nullable<number>>(null);
  const [pending, setPending] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const fetchEntries = useCallback(async (options) => {
    let result: Awaited<ReturnType<typeof getBlogEntries>>;
    setPending(true);

    try {
      result = await getBlogEntries(options);
    } catch {
      setErrorOccurred(true);

      return;
    }

    setEntries((entries) => options.offset ? entries.concat(result.entries) : result.entries);
    setPagination((pagination) => ({ ...pagination, ...result.pagination }));
    setPending(false);
  }, []);

  const loadMoreEntries = useCallback(() => {
    const offset = pagination.offset + entriesPerPage;

    if (pagination.total < offset) {
      return;
    }

    setPagination((pagination) => ({
      ...pagination,
      offset,
    }));
  }, [pagination]);

  useEffectAfterMount(() => {
    fetchEntries({ month, year });
  }, [month, year]);

  useEffectAfterMount(() => {
    fetchEntries({
      month,
      year,
      offset: pagination.offset,
    });
  }, [pagination.offset]);

  useEffect(() => {
    if (!preloadedState) {
      return;
    }

    setEntries(preloadedState.entries);
    setPagination(preloadedState.pagination);
  }, [preloadedState]);

  return (
    <BlogContext.Provider
      value={{
        entries,
        loadMoreEntries,
        pagination,
        month,
        setMonth,
        year,
        setYear,
        pending,
        errorOccurred,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
