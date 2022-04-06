/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AfishaInfoOutput = {
    /**
     * Статус фестиваля. Идёт или нет.
     */
    festival_status: boolean;
    /**
     * Текст под заголовком афиши.
     */
    description: string;
    /**
     * Текст под заголовком афиши о регистрации. Есть в выдаче только когда `festival_status=true`.
     */
    info_registration?: string;
    /**
     * Текст под знаком `*`. Есть в выдаче только когда `festival_status=true`.
     */
    asterisk_text?: string;
    /**
     * Список дат на которые есть хотя бы одно событие.
     */
    afisha_dates: Array<string>;
};
