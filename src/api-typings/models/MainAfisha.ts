/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Event } from './Event';

/**
 * Returns title and items for `afisha` block on main page.
 *
 * items: depending on the settings, it returns events for today or for 6 upcoming events.
 */
export type MainAfisha = {
    title: string;
    description: string;
    items: Array<Event>;
}