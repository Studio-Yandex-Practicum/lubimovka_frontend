/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OtherLink = {
    name: string;
    link: string;
    /**
     * Закрепить ссылку вверху страницы?
     */
    is_pinned: boolean;
    /**
     * Указывается для формирования порядка вывода информации
     */
    order_number: number;
};