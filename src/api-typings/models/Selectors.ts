/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Persons } from './Persons';

export type Selectors = {
    readonly id: number;
    person: Persons;
    year: number;
    position: string;
};