/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleEnum } from './RoleEnum';

/**
 * Сериализатор промежуточной модели Команда спектакля
 * для вложения в сериализатор Спектакля
 */
export type PerformancePerson = {
    role: RoleEnum;
    readonly name: string;
}
