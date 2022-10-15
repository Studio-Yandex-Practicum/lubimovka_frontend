import { AppLayout } from 'components/app-layout';
import { DonationPageTitle } from 'components/donation-page/donationPageTitle';
import { Opportunities } from 'components/donation-page/opportunities';
import { Report } from 'components/donation-page/report';
import { SEO } from 'components/seo';
import { usePersistentData } from 'providers/persistent-data-provider';

import mockData from './assets/mock-donation-data.json';

const Donation = () => {
  const { settings } = usePersistentData();

  return (
    <AppLayout>
      <SEO
        title="Поддержать фестиваль"
      />
      <main>
        <DonationPageTitle
          header={mockData.donationPageTitle.header}
          text={mockData.donationPageTitle.text}
        />
        <Opportunities
          data={mockData.opportunities}
        />
        <Report
          text={mockData.report.text}
          email={settings?.emailAddresses.requestDonationReport}
        />
      </main>
    </AppLayout>
  );
};

export default Donation;
