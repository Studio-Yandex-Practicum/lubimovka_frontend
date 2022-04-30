/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorOtherPlay } from './AuthorOtherPlay';
import type { AuthorPlay } from './AuthorPlay';
import type { OtherLink } from './OtherLink';
import type { SocialNetwork } from './SocialNetwork';

export type AuthorRetrieve = {
    /**
     * Формируется автоматически, может быть изменен вручную
     */
    slug: string;
    readonly name: string;
    readonly city: string;
    quote: string;
    biography: string;
    readonly achievements: Array<string>;
    social_networks: Array<SocialNetwork>;
    readonly email: string;
    other_links: Array<OtherLink>;
    plays: Array<AuthorPlay>;
    other_plays: Array<AuthorOtherPlay>;
    image: string;
};
