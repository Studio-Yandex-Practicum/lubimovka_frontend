import type { Url } from 'shared/types';

export type Settings = {
  emailAddresses: {
    forDirectorsAndActors: string
    forDirectors: string
    forBlogAuthors: string
    forPlayAuthors: string
    forVolunteers: string
    sponsorship: string
    playAcceptance: string
    requestDonationReport: string
  },
  pressCenter: {
    contactPerson: string
    contactPersonPhoto: Url
    contactEmail: string
    facebookGalleryUrl: string
  },
  canProposePlay: boolean
  privacyPolicyUrl: string
}
