/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Persons } from './Persons';

export type Volunteers = {
    readonly id: number;
    person: Persons;
    year: number;
    review_title?: string;
    review_text?: string;
};
