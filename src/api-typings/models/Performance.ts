/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgeLimitEnum } from './AgeLimitEnum';
import type { Image } from './Image';
import type { LocalEvent } from './LocalEvent';
import type { Play } from './Play';
import type { Role } from './Role';
import type { StatusEnum } from './StatusEnum';

/**
 * Performance serializer for performance page.
 */
export type Performance = {
    readonly id: number;
    play: Play;
    team: Array<Role>;
    images_in_block: Array<Image>;
    events: Array<LocalEvent>;
    status?: StatusEnum;
    name: string;
    main_image: string;
    bottom_image: string;
    video?: string | null;
    description: string;
    text: string;
    age_limit?: AgeLimitEnum;
    duration?: string;
}