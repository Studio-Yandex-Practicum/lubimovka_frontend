import { NextPage } from 'next';
import { PlayProposalSuccess } from 'components/play-proposal-success';
import titleData from './assets/mock-title-success-data.json';

import { AppLayout } from 'components/app-layout';

const SuccessPage: NextPage = () => (
  <>
    <AppLayout>
      <PlayProposalSuccess title={titleData.title} />
    </AppLayout>
  </>
);

export default SuccessPage;
