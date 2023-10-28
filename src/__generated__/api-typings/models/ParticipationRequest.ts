/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ParticipationRequest = {
    year: number;
    birth_year: number;
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
     * Файл должен быть в одном из поддерживаемых форматов: ('doc', 'docx', 'txt', 'odt', 'pdf')
     */
    file: Blob;
};