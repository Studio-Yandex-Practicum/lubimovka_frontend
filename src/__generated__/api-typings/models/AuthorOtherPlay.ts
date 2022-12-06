/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorForPlay } from './AuthorForPlay';

/**
 * Сериализатор Пьесы из промежуточной модели м2м Автор-Пьеса.
 *
 * Используется для сортировки выдачи других пьес (не пьес Любимовки).
 */
export type AuthorOtherPlay = {
    readonly id: number;
    name: string;
    authors: Array<AuthorForPlay>;
    readonly url_download: string;
};
