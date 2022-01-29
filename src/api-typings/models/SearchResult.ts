/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorSearch } from './AuthorSearch';
import type { Play } from './Play';

/**
 * Needed exclusively for the Schema.
 */
export type SearchResult = {
    plays: Array<Play>;
    authors: Array<AuthorSearch>;
}