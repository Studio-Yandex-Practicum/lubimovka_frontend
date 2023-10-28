/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Play } from './Play';

/**
 * Returns title and items for `short_list` block on main page.
 */
export type MainShortList = {
    title: string;
    items: Array<Play>;
};