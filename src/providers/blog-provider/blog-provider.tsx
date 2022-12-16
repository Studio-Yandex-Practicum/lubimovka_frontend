import { FC, useReducer, useState } from 'react';
import { objectToQueryString } from '@funboxteam/diamonds';

import { omit } from 'shared/helpers/omit';
import { isNil } from 'shared/helpers/is-nil';
import { useDidMountEffect } from 'shared/hooks/use-did-mount-effect';
import { fetcher } from 'services/fetcher';
import { entriesPerPage } from 'shared/constants/blog';
import { BlogContext } from './blog-provider.context';

import type { BlogEntry } from 'shared/types/domain';
import type {
  BlogItemListOutput,
  PaginatedBlogItemListOutputList,
} from '__generated__/api-typings';

const defaultBlogState = {
  entries: [] as BlogEntry[],
  offset: 0,
  hasMoreEntries: false,
};

enum BlogActionType {
  AddEntries,
  IncreaseOffset,
  Reset,
  SetPreloadedState,
};

export type BlogState = typeof defaultBlogState;
type BlogAction = { type: BlogActionType.AddEntries, payload: { entries: BlogEntry[], hasMoreEntries: boolean }}
  | { type: BlogActionType.IncreaseOffset }
  | { type: BlogActionType.Reset }
  | { type: BlogActionType.SetPreloadedState, payload: Partial<BlogState> }

const blogReducer = (state: BlogState, action: BlogAction) => {
  switch (action.type) {
  case BlogActionType.AddEntries:
    return {
      ...state,
      entries: [
        ...state.entries,
        ...action.payload.entries,
      ],
      hasMoreEntries: action.payload.hasMoreEntries,
    };
  case BlogActionType.IncreaseOffset:
    return {
      ...state,
      offset: state.offset + entriesPerPage,
    };
  case BlogActionType.Reset:
    return defaultBlogState;
  case BlogActionType.SetPreloadedState:
    return {
      ...defaultBlogState,
      ...action.payload,
    };
  default:
    return state;
  }
};

export const BlogProvider: FC = (props) => {
  const { children } = props;
  const [blog, dispatch] = useReducer(blogReducer, defaultBlogState);
  const [selectedMonth, setSelectedMonth] = useState<Nullable<number>>(null);
  const [selectedYear, setSelectedYear] = useState<Nullable<number>>(null);
  const [errorCode, setErrorCode] = useState<number>();
  const [filterWasChanged, setFilterWasChanged] = useState(false);
  const [pending, setPending] = useState(false);

  const handleShouldLoadEntries = () => {
    dispatch({ type: BlogActionType.IncreaseOffset });
  };

  const setPreloadedState = (state: Partial<BlogState>) => {
    dispatch({ type: BlogActionType.SetPreloadedState, payload: state });
  };

  const fetchBlogEntries = async ()  => {
    const params = omit({
      offset: blog.offset,
      limit: entriesPerPage,
      month: selectedMonth,
      year: selectedYear,
    }, isNil);
    let response;

    try {
      response = await fetcher<PaginatedBlogItemListOutputList>(`/blog/${objectToQueryString(params)}`);
    } catch {
      setErrorCode(500);
      return;
    }

    const {
      results,
      next
    } = response;

    if (results) {
      dispatch({ type: BlogActionType.AddEntries, payload: { entries: toBlogEntries(results), hasMoreEntries: !!next } });
    }

    setPending(false);
  };

  useDidMountEffect(() => {
    if (selectedMonth && !selectedYear) {
      return;
    }
    setFilterWasChanged(true);
    dispatch({ type: BlogActionType.Reset });
  }, [selectedYear, selectedMonth]);

  useDidMountEffect(() => {
    if (!blog.offset && !filterWasChanged) {
      return;
    }
    setPending(true);
    fetchBlogEntries();
    if (filterWasChanged) {
      setFilterWasChanged(false);
    }
  }, [blog.offset, filterWasChanged]);

  return (
    <BlogContext.Provider
      value={{
        setPreloadedState,
        entries: blog.entries,
        hasMoreEntries: blog.hasMoreEntries,
        handleShouldLoadEntries,
        selectedMonth,
        setSelectedMonth,
        selectedYear,
        setSelectedYear,
        pending,
        errorCode,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

function toBlogEntries(array: BlogItemListOutput[]): BlogEntry[] {
  return array.map(({
    id,
    pub_date,
    title,
    description,
    author_url_title,
    image
  }) => ({
    id,
    publicationDate: pub_date,
    title,
    description,
    author: author_url_title,
    cover: image,
  }));
};
