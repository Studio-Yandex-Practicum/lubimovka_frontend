import { NextPage } from 'next';
import { PlayProposalSuccess } from 'components/play-proposal-success';
import { AppLayout } from 'components/app-layout';

const SuccessPage: NextPage = () => (
  <AppLayout>
    <PlayProposalSuccess />
  </AppLayout>
);

export default SuccessPage;
