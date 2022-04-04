/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Role serializer.
 *
 * Used in Performance, Reading and Master-class serializers for afisha page
 * and for individual Performance page.
 */
 export type Role = {
    name: string;
    readonly persons: Array<string>;
};
