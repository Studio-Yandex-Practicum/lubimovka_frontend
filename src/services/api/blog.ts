import { objectToQueryString } from '@funboxteam/diamonds';

import { entriesPerPage } from 'core/blog';
import { fetcher } from 'services/fetcher';

import type {
  PaginatedBlogItemListOutputList as BlogEntryListDTO,
  BlogItemList as BlogEntryDTO,
  BlogItemYearsMonthsOutput,
} from '__generated__/api-typings';
import type { BlogEntryPreview, BlogFilters } from 'core/blog';
import type { Pagination } from 'core/pagination';

type BlogFiltersDTO = BlogItemYearsMonthsOutput[]

interface GetBlogEntriesParams {
  month?: number
  year?: number
  limit?: number
  offset?: number
}

type PaginatedBlogEntries = {
  entries: BlogEntryPreview[]
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

function mapDTOToBlogEntry(dto: BlogEntryDTO): BlogEntryPreview {
  return {
    id: dto.id,
    title: dto.title,
    description: dto.description,
    authorFullName: dto.author_url_title,
    authorUrl: dto.author_url,
    image: dto.image,
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
