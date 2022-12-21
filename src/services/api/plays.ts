import { objectToQueryString } from '@funboxteam/diamonds';

import { fetcher } from 'services/fetcher';

import type { Play, PlayFilters } from 'core/play';
import type { FestivalYear, FestivalProgram } from 'core/festival';
import type { PaginatedPlayList as PlayListDTO, PlayFilters as PlayFiltersDTO } from '__generated__/api-typings';

export function getPlays(params: { years?: FestivalYear[], programIds?: Pick<FestivalProgram, 'id'>[] } = {}) {
  const { years = [], programIds = [] } = params;
  const searchParams = objectToQueryString({
    limit: 50,
    ...years.length && { festival: years?.join(',') },
    ...programIds.length && { program: programIds?.join(',') }
  });

  return fetcher<PlayListDTO>(`/library/plays/${searchParams}`).then(mapDTOToPlays);
}

function mapDTOToPlays({ results = [] }: PlayListDTO): Play[] {
  return results.map((result) => ({
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
  }));
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
