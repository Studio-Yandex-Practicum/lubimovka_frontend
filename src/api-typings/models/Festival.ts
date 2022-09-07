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
    selectors_page_link?: string | null;
    volunteers_count?: number;
    events_count?: number;
    cities_count?: number;
    video_link: string;
    blog_entries?: string;
    festival_image?: string;
    readonly images: Array<Nested>;
    plays_links: Array<InfoLink>;
    additional_links: Array<InfoLink>;
};
