import type { Author } from 'core/author';
import type { FestivalProgram, FestivalYear } from 'core/festival';

export type Play = {
  id: number;
  title: string;
  authors: Author[];
  city?: string
  year?: string
  downloadUrl: Url
  readingUrl?: Url
};

export type PlayFilters = {
  years: FestivalYear[]
  programs: FestivalProgram[]
}
