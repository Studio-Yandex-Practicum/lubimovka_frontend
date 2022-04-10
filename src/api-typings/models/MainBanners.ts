/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Banner } from './Banner';

/**
 * Returns items for `banners` block on main page.
 *
 * items: returns all `Banner` items. It's impossible to have more than three
 * banners.
 */
export type MainBanners = {
    items: Array<Banner>;
};