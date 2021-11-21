/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Image } from './Image';
import type { PerformancePerson } from './PerformancePerson';
import type { Play } from './Play';

/**
 * Сериализатор Спектакля для отображения на странице Спектакля
 */
export type Performance = {
    readonly id: number;
    play: Play;
    persons: Array<PerformancePerson>;
    images_in_block: Array<Image>;
    name: string;
    main_image: string;
    bottom_image: string;
    video?: string | null;
    description: string;
    text: string;
    age_limit: number;
    event: number;
}
