/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Content_object } from './Content_object';

/**
 * Content (Item/Block) Serializer
 *
 * 1. "content_type" returns type of content item
 * 2. "content_item" recognized type of item and serialize it
 */
export type BaseContent = {
    readonly content_type: string;
    readonly content_item: Content_object;
}