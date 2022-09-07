/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MainAfisha } from './MainAfisha';
import type { MainBanners } from './MainBanners';
import type { MainBlog } from './MainBlog';
import type { MainFirstScreen } from './MainFirstScreen';
import type { MainNews } from './MainNews';
import type { MainPlaces } from './MainPlaces';
import type { MainShortList } from './MainShortList';
import type { MainVideoArchive } from './MainVideoArchive';
import type { PartnersSettings } from './PartnersSettings';

export type Main = {
    first_screen?: MainFirstScreen;
    blog?: MainBlog;
    news?: MainNews;
    afisha?: MainAfisha;
    banners?: MainBanners;
    short_list?: MainShortList;
    places?: MainPlaces;
    video_archive?: MainVideoArchive;
    show_partners: PartnersSettings;
};
