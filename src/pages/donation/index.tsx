import { NextPage } from 'next';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import { Enthusiasm } from 'components/donation-page/enthusiasm';
import { Opportunities } from 'components/donation-page/opportunities';
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
