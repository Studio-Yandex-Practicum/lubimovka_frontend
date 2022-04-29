/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ContentUnitRichText = {
    /**
     * Текст с HTML разметкой. Может содержать теги блоков: `h3`, `h4`, `p`. Блоки могут быть обернуты `blockquote` или использоваться в списках `ol`, `ul`. Разрешены теги элементов: `strong`, `em`, `a`. Блоки разделятся последовательностью символов `\r\n\r\n`.
     */
    rich_text: string;
};
