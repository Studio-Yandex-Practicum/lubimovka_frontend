/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Сериализатор читки на странице афиши.
 */
export type EventReading = {
    readonly id: number;
    name: string;
    description: string;
    readonly team: string;
    readonly project_title: string;
}