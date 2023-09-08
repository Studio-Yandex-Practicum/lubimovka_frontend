/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PersonRole } from './PersonRole';

export type ExtendedPerson = {
    readonly id: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly middle_name: string;
    readonly city: string;
    readonly email: string;
    readonly image: string;
    roles: Array<PersonRole>;
};
