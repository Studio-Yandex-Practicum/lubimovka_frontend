/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Content (Item/Block) Serializer
 *
 * 1. "content_type" returns type of content item
 * 2. "content_item" recognized type of item and serialize it
 */
export type BaseContent = {
    readonly content_type: string;
    readonly content_item: string;
}