/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OtherLink } from './OtherLink';
import type { OtherPlayLinks } from './OtherPlayLinks';
import type { Play } from './Play';
import type { SocialNetwork } from './SocialNetwork';

export type AuthorRetrieve = {
    readonly id: number;
    readonly name: string;
    readonly city: string;
    quote: string;
    biography: string;
    readonly achievements: Array<string>;
    social_networks: Array<SocialNetwork>;
    readonly email: string;
    other_links: Array<OtherLink>;
    plays: Array<Play>;
    other_plays: Array<OtherPlayLinks>;
    image: string;
}