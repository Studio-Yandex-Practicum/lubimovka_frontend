/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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
    teams: Array<number>;
    sponsors: Array<number>;
    volunteers: Array<number>;
    images: Array<number>;
}
