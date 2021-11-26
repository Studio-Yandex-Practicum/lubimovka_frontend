import { NextPage } from 'next';
import { PageTransition } from 'components/page-transition';
import { PlayProposalSuccessLayout } from 'components/play-proposal-success-layout';
import AppLayout from 'components/app-layout';

const PlayProposalSuccess: NextPage = () => (
  <PageTransition type='rightToLeft'>
    <AppLayout>
      <PlayProposalSuccessLayout/>
    </AppLayout>
  </PageTransition>
);

export default PlayProposalSuccess;
