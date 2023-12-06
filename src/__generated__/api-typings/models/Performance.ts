/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgeLimitEnum } from './AgeLimitEnum';
import type { BlockImages } from './BlockImages';
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
    gallery_title: string;
    gallery_images: Array<BlockImages>;
    events: Array<LocalEvent>;
    readonly duration: number;
    status?: StatusEnum;
    name: string;
    main_image: string;
    bottom_image: string;
    video?: string | null;
    description?: string;
    /**
     * Описание, расположенное под изображением
     */
    intro?: string;
    text: string;
    age_limit?: AgeLimitEnum;
    creator: number;
};
