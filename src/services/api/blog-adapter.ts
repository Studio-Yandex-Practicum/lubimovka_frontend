import { stringify } from 'querystring';

import useSWRInfinite from 'swr/infinite';

import { BLOG_ENTRIES_PER_PAGE } from 'core/blog';
import { fetcher } from 'services/fetch';

import type {
  BlogItemYearsMonthsOutput,
  PaginatedBlogItemListOutputList as BlogDTO,
} from '__generated__/api-typings';
import type { BlogEntryPreview, BlogFilters } from 'core/blog';
import type { DTOPagination } from 'services/api/types';

type BlogFiltersDTO = BlogItemYearsMonthsOutput[]

export const fetchBlogFilters = () => fetcher<BlogFiltersDTO>('/blog/years-months/').then(mapDTOToBlogFilters);

function mapDTOToBlogFilters(dto: BlogFiltersDTO) {
  return dto.map(({ year, months }) => ({
    year: year.toString(),
    months: months.map(String)
  }));
}

const RESOURCE_URL = '/blog/';

export type BlogEntriesQueryParams = BlogFilters & {
  offset?: number
  limit: number
}

type PaginatedBlogEntries = {
  results: BlogEntryPreview[]
  pagination: DTOPagination
}

export const fetchBlogEntries = (params: BlogEntriesQueryParams) => fetcher<BlogDTO>(`${RESOURCE_URL}?${stringify(params)}`).then(mapDTOToBlogEntries);

function mapDTOToBlogEntries(dto: BlogDTO): PaginatedBlogEntries {
  const {
    results = [],
    ...pagination
  } = dto;

  return {
    results: results.map((dto) => ({
      id: dto.id,
      title: dto.title,
      description: dto.description,
      authorFullName: dto.author_url_title,
      authorUrl: dto.author_url,
      image: dto.image,
    })),
    pagination,
  };
}

export const getBlogEntriesCacheKey = (params: BlogEntriesQueryParams) => [
  RESOURCE_URL,
  params,
] as const;

export const useBlog = (filters: BlogFilters) => {
  const getParams = (
    pageIndex: number,
    previousPageData: PaginatedBlogEntries
  ) => {
    if (previousPageData && !previousPageData.pagination.next) {
      return null;
    }

    if (pageIndex === 0 && Object.values(filters).every((x) => x === undefined)) {
      return getBlogEntriesCacheKey({
        limit: BLOG_ENTRIES_PER_PAGE,
      });
    }

    return getBlogEntriesCacheKey({
      month: filters.month,
      year: filters.year,
      limit: BLOG_ENTRIES_PER_PAGE,
      offset: pageIndex * BLOG_ENTRIES_PER_PAGE,
    });
  };

  return useSWRInfinite(getParams, ([, params]) => fetchBlogEntries(params), {
    revalidateFirstPage: false,
  });
};
