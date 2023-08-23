/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Participation = {
    readonly id: number;
    year: number;
    birth_year: number;
    readonly url_file_in_storage: string;
    readonly modified: string;
    readonly created: string;
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
    file: string;
    readonly exported_to_google: boolean;
    readonly saved_to_storage: boolean;
    readonly sent_to_email: boolean;
};