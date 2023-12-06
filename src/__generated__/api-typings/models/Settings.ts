/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForPress } from './ForPress';
import type { ProjectList } from './ProjectList';

export type Settings = {
    play_author_email: string;
    blog_author_email: string;
    reading_email: string;
    volunteer_email: string;
    trustee_email: string;
    press_email: string;
    submit_play_email: string;
    url_to_privacy_policy: string;
    for_press: ForPress;
    plays_reception_is_open: boolean;
    projects: Array<ProjectList>;
    email_to_send_questions: string;
    show_team: boolean;
    show_sponsors: boolean;
    show_volunteers: boolean;
};
