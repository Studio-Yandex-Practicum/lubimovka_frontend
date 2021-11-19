import { NextPage } from 'next';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import { Enthusiasm } from 'components/donation-page/enthusiasm';
import { Opportunity } from 'components/donation-page/opportunity';
import { Report } from 'components/donation-page/report';

import mockData from './assets/mock-donation-data.json';

const Donation: NextPage = () => (
  <AppLayout>
    <Head>
      <title>{mockData.title}</title>
    </Head>
    <main>
      <Enthusiasm
        header={mockData.enthusiasm.header}
        text={mockData.enthusiasm.text}
        footnote={mockData.enthusiasm.footnote}
      />
      <Opportunity
        title={mockData.opportunities[0].title}
        picture={mockData.opportunities[0].picture}
        kickies={mockData.opportunities[0].kickies}
      />
      <Opportunity
        title={mockData.opportunities[1].title}
        picture={mockData.opportunities[1].picture}
        kickies={mockData.opportunities[1].kickies}
      />
      <Report
        text={mockData.report.text}
        email={mockData.report.email}
      />
    </main>
  </AppLayout>
);

export default Donation;
