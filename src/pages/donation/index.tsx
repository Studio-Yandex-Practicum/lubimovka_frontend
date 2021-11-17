import { NextPage } from 'next';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import { Enthusiasm } from 'components/donation-page/enthusiasm';
// import { Opportunity } from 'components/donation-page/opportunity';
// import { Report } from 'components/donation-page/report';

import donationData from './assets/mock-donation-data.json';

const Donation: NextPage = () => (
  <AppLayout>
    <Head>
      <title>{donationData.title}</title>
    </Head>
    <main>
      <Enthusiasm
        header={donationData.enthusiasm.header}
        text={donationData.enthusiasm.text}
        footnote={donationData.enthusiasm.footnote}
      />
      {/*
      <Opportunity
        header={donationData.opportunities[0].title}
        picture={donationData.opportunities[0].picture}
        kickies={donationData.opportunities[0].kickies}
      />
      <Opportunity
        header={donationData.opportunities[1].title}
        picture={donationData.opportunities[1].picture}
        kickies={donationData.opportunities[1].kickies}
      />
      <Report
        text={donationData.report.text}
      />
        */}
    </main>
  </AppLayout>
);

export default Donation;
