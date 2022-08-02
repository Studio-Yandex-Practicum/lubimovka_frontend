/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { partner_type } from './partner_type';

export type PartnerListOutput = {
    readonly id: number;
    name: string;
    type: partner_type;
    /**
     * Поставьте галочку, чтобы сделать партнёра генеральным
     */
    is_general?: boolean;
    url: string;
    /**
     * Загрузите логотип партнёра
     */
    image: string;
    /**
     * Поле не обязательное
     */
    description?: string;
    /**
     * Поставьте галочку, чтобы показать логотип партнёра внизу страницы
     */
    in_footer_partner?: boolean;
};
