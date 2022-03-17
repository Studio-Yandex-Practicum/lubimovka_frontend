import { NextPage } from 'next';
import Head from 'next/head';

import { AppLayout } from 'components/app-layout';
import { DonationPageTitle } from 'components/donation-page/donationPageTitle';
import { Opportunities } from 'components/donation-page/opportunities';
import { Report } from 'components/donation-page/report';

import mockData from './assets/mock-donation-data.json';

const Donation: NextPage = () => (
  <AppLayout>
    <Head>
      <title>
        {mockData.title}
      </title>
    </Head>
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
