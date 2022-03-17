/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Сериализатор полного имени Автора.
 */
export type AuthorForPlay = {
    readonly name: string;
    /**
     * Если не заполнено, будет сформировано автоматически
     */
    slug?: string;
}