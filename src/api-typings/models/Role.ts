/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlogPerson } from './BlogPerson';

export type Role = {
    name: string;
    /**
     * Если пустое, то заполняется автоматически
     */
    slug: string;
    readonly persons: Array<BlogPerson>;
}
