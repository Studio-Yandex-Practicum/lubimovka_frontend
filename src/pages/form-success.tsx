import { NextPage } from 'next';
import { PlayProposalSuccessLayout } from 'components/play-proposal-success-layout';
import AppLayout from 'components/app-layout';

const PlayProposalSuccess: NextPage = () => (
  <AppLayout>
    <PlayProposalSuccessLayout />
  </AppLayout>
);

export default PlayProposalSuccess;
