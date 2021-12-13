/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ButtonEnum } from './ButtonEnum';

export type Banner = {
    readonly id: number;
    title: string;
    description: string;
    url: string;
    image: string;
    button: ButtonEnum;
}
