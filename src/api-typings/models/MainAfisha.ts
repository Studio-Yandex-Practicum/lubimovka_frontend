/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Event } from './Event';

/**
 * Returns title and items for `afisha` block on main page.
 *
 * items: depending on the settings, it returns events for today or for 6
 * days.
 */
export type MainAfisha = {
    title: string;
    items: Array<Event>;
}