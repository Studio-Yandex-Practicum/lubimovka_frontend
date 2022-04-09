/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Persons } from './Persons';
import type { TeamEnum } from './TeamEnum';

export type FestivalTeams = {
    readonly id: number;
    person: Persons;
    team: TeamEnum;
    position: string;
    /**
     * Поставьте галочку, чтобы назначить человека PR-директором
     */
    is_pr_director?: boolean;
};
