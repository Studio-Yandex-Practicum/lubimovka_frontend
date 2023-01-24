/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorForPlay } from './AuthorForPlay';

export type OrderedPlay = {
    readonly id: number;
    name: string;
    authors: Array<AuthorForPlay>;
    city?: string;
    year?: number;
    readonly url_download: string;
    url_reading: string;
};
