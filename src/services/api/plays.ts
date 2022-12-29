import { objectToQueryString } from '@funboxteam/diamonds';

import { fetcher } from 'services/fetcher';

import type { Play, PlayFilters } from 'core/play';
import type { FestivalYear, FestivalProgram } from 'core/festival';
import type { PaginatedPlayList as PlayListDTO, PlayFilters as PlayFiltersDTO } from '__generated__/api-typings';
import type { DTOPagination } from './types';

interface GetPlaysParams {
  years?: FestivalYear[]
  programIds?: FestivalProgram['id'][]
  limit: number,
  offset?: number,
}

export function getPlays(params: GetPlaysParams) {
  const {
    years = [],
    programIds = [],
    limit,
    offset,
  } = params;

  const searchParams = objectToQueryString({
    ...years.length && { festival: years?.join(',') },
    ...programIds.length && { program: programIds?.join(',') },
    limit,
    ...offset && { offset }
  });

  return fetcher<PlayListDTO>(`/library/plays/${searchParams}`).then(mapDTOToPlays);
}

function mapDTOToPlays({ results = [], ...pagination }: PlayListDTO): { plays: Play[], pagination: DTOPagination } {
  return {
    plays: results.map((result) => ({
      id: result.id,
      title: result.name,
      authors: result.authors.map((author) => ({
        slug: author.slug,
        fullName: author.name,
      })),
      city: result.city,
      ...result.year && { year: result.year.toString() },
      downloadUrl: result.url_download,
      readingUrl: result.url_reading,
    })),
    pagination,
  };
}

export function getPlayFilters() {
  return fetcher<PlayFiltersDTO>('/library/playfilters/').then(mapDTOToPlayFilters);
}

function mapDTOToPlayFilters({ years, programs }: PlayFiltersDTO): PlayFilters {
  return {
    years: years.map(String),
    programs: programs.map((program) => ({
      id: program.pk.toString(),
      title: program.name,
    }))
  };
}
