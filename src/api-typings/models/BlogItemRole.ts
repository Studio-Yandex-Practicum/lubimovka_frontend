/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BlogItemRole = {
    name: string;
    /**
     * Если пустое, то заполняется автоматически
     */
    slug: string;
    readonly persons: Array<string>;
}