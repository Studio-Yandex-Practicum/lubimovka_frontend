/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Persons = {
    readonly id: number;
    first_name: string;
    last_name?: string;
    middle_name?: string;
    city?: string;
    email?: string | null;
    /**
     * Обязательно указать для: членов команды, попечителей фестиваля и волонтёров.
     */
    image?: string;
};