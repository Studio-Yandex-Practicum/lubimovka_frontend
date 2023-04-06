import { stringify } from 'querystring';

import useSWRInfinite from 'swr/infinite';

import { NEWS_PER_PAGE } from 'core/news';
import { fetcher } from 'services/fetch';

import type {
  NewsItemYearsMonthsOutput,
  PaginatedNewsItemListList as NewsDTO
} from '__generated__/api-typings';
import type { News, NewsFilters } from 'core/news';
import type { DTOPagination } from 'services/api/types';

type NewsFiltersDTO = NewsItemYearsMonthsOutput[]

export const getNewsFilters = () => fetcher<NewsFiltersDTO>('/news/years-months/').then(mapDTOToNewsFilters);

function mapDTOToNewsFilters(dto: NewsFiltersDTO) {
  return dto.map(({ year, months }) => ({
    year: year.toString(),
    months: months.map(String)
  }));
}

const RESOURCE_URL = '/news/';

type NewsQueryParams = NewsFilters & {
  offset?: number
  limit: number
}

type PaginatedNews = {
  results: News[]
  pagination: DTOPagination
}

export const getNews = (params: NewsQueryParams) => fetcher<NewsDTO>(`${RESOURCE_URL}?${stringify(params)}`).then(mapDTOToNews);

function mapDTOToNews(dto: NewsDTO): PaginatedNews {
  const {
    results = [],
    ...pagination
  } = dto;

  return {
    results: results.map((item) => ({
      id: item.id,
      date: item.pub_date,
      title: item.title,
      description: item.description,
    })),
    pagination,
  };
}

export const getNewsCacheKey = (params: NewsQueryParams) => [
  RESOURCE_URL,
  params,
] as const;

export const useNews = (filters: NewsFilters) => {
  const getKey = (pageIndex: number, previousPageData: PaginatedNews) => {
    if (previousPageData && !previousPageData.pagination.next) {
      return null;
    }

    if (pageIndex === 0 && Object.values(filters).every((x) => x === undefined)) {
      return getNewsCacheKey({
        limit: NEWS_PER_PAGE,
      });
    }

    return getNewsCacheKey({
      month: (filters.month && filters.year) ? filters.month : undefined,
      year: filters.year,
      limit: NEWS_PER_PAGE,
      offset: pageIndex * NEWS_PER_PAGE,
    });
  };

  return useSWRInfinite(getKey, ([, params]) => getNews(params), {
    revalidateFirstPage: false,
  });
};
