/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InfoLink } from './InfoLink';
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
    blog_entries?: string;
    press_release_image?: string;
    readonly images: Array<Nested>;
    readonly plays_links: Array<InfoLink>;
    readonly additional_links: Array<InfoLink>;
};
