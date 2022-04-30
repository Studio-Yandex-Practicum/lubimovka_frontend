/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorForPlay } from './AuthorForPlay';

/**
 * Сериализатор Пьесы.
 */
export type Play = {
    readonly id: number;
    name: string;
    authors: Array<AuthorForPlay>;
    city?: string;
    year?: number;
    url_download: string;
    url_reading?: string;
};
