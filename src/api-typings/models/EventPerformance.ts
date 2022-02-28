/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Сериализатор Спектакля для отображения на странице Афиши.
 */
export type EventPerformance = {
    readonly id: number;
    name: string;
    description: string;
    readonly team: string;
    image: string;
    readonly project_title: string;
}