import { objectToQueryString } from '@funboxteam/diamonds';

import { fetcher } from 'services/fetcher';

import type { SearchResult as SearchDTO } from '__generated__/api-typings';
import type { Author } from 'core/author';
import type { Play } from 'core/play';

type SearchResults = {
  plays: Play[]
  authors: Author[]
}

export function getSearchResults(query: string): Promise<SearchResults> {
  return fetcher<SearchDTO>(`/library/search/${objectToQueryString({ q: query })}`).then(mapDTOToSearchResults);
}

function mapDTOToSearchResults(dto: SearchDTO): SearchResults {
  return {
    plays: dto.plays.map((play) => ({
      id: play.id,
      title: play.name,
      authors: play.authors.map((author) => ({
        fullName: author.name,
        slug: author.slug,
      })),
      city: play.city,
      ...play.year && { year: play.year.toString() },
      downloadUrl: play.url_download,
      readingUrl: play.url_reading,
    })),
    authors: dto.authors.map((author) => ({
      fullName: author.name,
      slug: author.slug,
    })),
  };
}
