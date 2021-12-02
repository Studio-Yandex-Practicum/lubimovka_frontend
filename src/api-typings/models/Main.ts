/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Banner } from './Banner';
import type { BlogItemList } from './BlogItemList';
import type { Event } from './Event';
import type { NewsItemList } from './NewsItemList';
import type { Place } from './Place';
import type { Play } from './Play';

export type Main = {
    first_screen_title?: string;
    first_screen_url_title?: string;
    first_screen_url?: string;
    blog_title?: string;
    blog_items?: Array<BlogItemList>;
    news_title?: string;
    news_items?: Array<NewsItemList>;
    event_title?: string;
    event_items?: Array<Event>;
    banner_items?: Array<Banner>;
    short_list_title?: string;
    short_list_items?: Array<Play>;
    place_items?: Array<Place>;
    video_archive_url?: string;
    video_archive_photo?: string;
}