import { objectToQueryString } from '@funboxteam/diamonds';

import { fetcher } from 'services/fetcher';

import type { PaginatedAuthorListList as AuthorsDTO, AuthorLetters as AuthorLettersDTO } from '__generated__/api-typings';
import type { Author } from 'core/author';

export async function getAvailableAuthorsPaginationLetters() {
  return fetcher<AuthorLettersDTO>('/library/author_letters/').then(({ letters }) => letters.map((letter) => letter.toLowerCase()));
}

export function getAuthors({ letter }: { letter: string }) {
  const params = objectToQueryString({
    letter,
    limit: 9999,
  });

  return fetcher<AuthorsDTO>(`/library/authors/${params}`).then(mapDTOToAuthors);
}

function mapDTOToAuthors({ results = [] }: AuthorsDTO): Author[] {
  return results.map((author) => ({
    slug: author.slug,
    fullName: author.name,
  }));
}
