/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtendedPerson } from './ExtendedPerson';

export type PersonsBlock = {
    title: string;
    readonly items: Array<ExtendedPerson>;
}