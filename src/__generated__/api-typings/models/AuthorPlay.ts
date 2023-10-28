/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorForPlay } from './AuthorForPlay';

/**
 * Сериализатор Пьесы из промежуточной модели м2м Автор-Пьеса.
 *
 * Используется для сортировки выдачи пьес.
 */
export type AuthorPlay = {
    readonly id: number;
    name: string;
    authors: Array<AuthorForPlay>;
    city?: string;
    year?: number;
    readonly url_download: string;
    url_reading?: string;
};