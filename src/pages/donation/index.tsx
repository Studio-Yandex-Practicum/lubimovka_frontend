import { NextPage } from 'next';

import { AppLayout } from 'components/app-layout';
import { DonationPageTitle } from 'components/donation-page/donationPageTitle';
import { Opportunities } from 'components/donation-page/opportunities';
import { Report } from 'components/donation-page/report';
import { SEO } from 'components/seo';

import mockData from './assets/mock-donation-data.json';

const Donation: NextPage = () => (
  <AppLayout>
    <SEO
      title="Поддержать фестиваль"
    />
    <main>
      <DonationPageTitle
        header={mockData.donationPageTitle.header}
        text={mockData.donationPageTitle.text}
        footnote={mockData.donationPageTitle.footnote}
      />
      <Opportunities
        data={mockData.opportunities}
      />
      <Report
        text={mockData.report.text}
        email={mockData.report.email}
      />
    </main>
  </AppLayout>
);

export default Donation;
