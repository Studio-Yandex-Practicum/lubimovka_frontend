/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { partner_type } from './partner_type';

export type Partner = {
    readonly id: number;
    name: string;
    type: partner_type;
    url: string;
    /**
     * Загрузите логотип партнёра
     */
    image: string;
    /**
     * Поставьте галочку, чтобы показать логотип партнёра внизу страницы
     */
    in_footer_partner?: boolean;
};
