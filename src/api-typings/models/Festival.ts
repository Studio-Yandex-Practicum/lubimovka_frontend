/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Nested } from './Nested';

export type Festival = {
    readonly id: number;
    start_date: string;
    end_date: string;
    description: string;
    year?: number;
    plays_count?: number;
    selected_plays_count?: number;
    selectors_count?: number;
    volunteers_count?: number;
    events_count?: number;
    cities_count?: number;
    video_link: string;
    blog_entries: string;
    press_release_image: string;
    readonly volunteers: Array<Nested>;
    readonly images: Array<Nested>;
}