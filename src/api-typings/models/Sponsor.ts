/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Persons } from './Persons';

export type Sponsor = {
    readonly id: number;
    person: Persons;
    position: string;
};
