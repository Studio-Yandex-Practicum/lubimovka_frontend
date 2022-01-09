/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PartnerTypeEnum } from './PartnerTypeEnum';

export type Partner = {
    readonly id: number;
    name: string;
    type: PartnerTypeEnum;
    url: string;
    /**
     * Загрузите логотип партнёра
     */
    image: string;
    /**
     * Поставьте галочку, чтобы показать логотип партнёра внизу страницы
     */
    in_footer_partner?: boolean;
}
