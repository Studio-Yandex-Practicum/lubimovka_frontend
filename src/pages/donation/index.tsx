import { AppLayout } from 'components/app-layout';
import { DonationPageTitle } from 'components/donation-page/donationPageTitle';
import { Opportunities } from 'components/donation-page/opportunities';
import { Report } from 'components/donation-page/report';
import { SEO } from 'components/seo';
import { useSettings } from 'services/api/settings-adapter';
import { opportunities } from 'shared/constants/donation-opportunities';

const Donation = () => {
  const { settings } = useSettings();

  return (
    <AppLayout>
      <SEO
        title="Поддержать фестиваль"
      />
      <main>
        <DonationPageTitle
          header="Любимовка существует благодаря энтузиазму"
          text={'А также поддержке фондов, партнёров и пожертвований, которые покрывают неизбежные затраты.\r\n\nВход на все мероприятия фестиваля всегда был и будет бесплатным.'}
        />
        <Opportunities
          data={opportunities}
        />
        <Report
          text="Вся отчётность о расходовании народных денег будет всегда доступна любому интересующемуся в самом подробном виде. Пишите на "
          email={settings?.emailAddresses.requestDonationReport}
        />
      </main>
    </AppLayout>
  );
};

export default Donation;
