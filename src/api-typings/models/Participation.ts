/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Participation = {
    readonly id: number;
    year: number;
    birth_year: number;
    readonly created: string;
    readonly modified: string;
    first_name: string;
    last_name: string;
    city: string;
    /**
     * Номер телефона указывается в формате +7
     */
    phone_number: string;
    email: string;
    title: string;
    /**
     * Файл в одно из форматов ('doc', 'docx', 'txt', 'odt', 'pdf')
     */
    file: string;
    readonly exported_to_google: boolean;
    readonly saved_to_storage: boolean;
};