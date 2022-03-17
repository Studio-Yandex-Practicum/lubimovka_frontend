/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthorSearch = {
    /**
     * Если не заполнено, будет сформировано автоматически
     */
    slug?: string;
    readonly name: string;
    readonly first_letter: string;
}