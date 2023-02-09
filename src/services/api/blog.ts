import { objectToQueryString } from '@funboxteam/diamonds';

import { entriesPerPage } from 'core/blog';
import { fetcher } from 'services/fetcher';

import type {
  PaginatedBlogItemListOutputList as BlogEntryListDTO,
  BlogItemList as BlogEntryDTO,
  BlogItemYearsMonthsOutput,
} from '__generated__/api-typings';
import type { BlogEntry, BlogFilters } from 'core/blog';
import type { Pagination } from 'core/pagination';

type BlogFiltersDTO = BlogItemYearsMonthsOutput[]

interface GetBlogEntriesParams {
  month?: number
  year?: number
  limit?: number
  offset?: number
}

type PaginatedBlogEntries = {
  entries: BlogEntry[]
  pagination: Pagination
}

export async function getBlogEntries(params: GetBlogEntriesParams = {}): Promise<PaginatedBlogEntries> {
  const {
    month,
    year,
    limit = entriesPerPage,
    offset = 0,
  } = params;

  const searchParams = objectToQueryString({
    ...month && { month },
    ...year && { year },
    limit,
    ...offset && { offset },
  });

  return fetcher<BlogEntryListDTO>(`/blog/${searchParams}`).then(({ results = [], count = 0 }) => ({
    entries: results.map(mapDTOToBlogEntry),
    pagination: {
      offset,
      total: count,
    }
  }));
}

function mapDTOToBlogEntry(dto: BlogEntryDTO): BlogEntry {
  return {
    id: dto.id,
    publicationDate: dto.pub_date,
    title: dto.title,
    description: dto.description,
    author: dto.author_url_title,
    cover: dto.image,
  };
}

export function getBlogFilters() {
  return fetcher<BlogFiltersDTO>('/blog/years-months/').then(mapDTOToBlogFilters);
}

function mapDTOToBlogFilters(dto: BlogFiltersDTO): Omit<BlogFilters, 'month'> {
  return {
    year: dto.map((item) => item.year),
  };
}
