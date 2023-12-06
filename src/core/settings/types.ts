import type { Project } from 'core/project';

export type Settings = {
  emailAddresses: {
    forDirectorsAndActors: Email
    forDirectors: Email
    forBlogAuthors: Email
    forPlayAuthors: Email
    forVolunteers: Email
    sponsorship: Email
    playAcceptance: Email
    requestDonationReport: Email
  }
  pressCenter: {
    contactPerson: string
    contactPersonPhoto: Url
    contactEmail: Email
    facebookGalleryUrl: Url
  }
  canProposePlay: boolean
  privacyPolicyUrl: Url
  projects: Omit<Project, 'image' | 'description'>[]
}
