
import { AppLayout } from 'components/app-layout';
import { PageTransition } from 'components/page-transition';
import { PlayProposalSuccessLayout } from 'components/play-proposal-success-layout';
import { SEO } from 'components/seo';

import type { GetServerSideProps } from 'next';

const PlayProposalSuccess = () => {
  return (
    <PageTransition type="rightToLeft">
      <AppLayout>
        <SEO title="Пьеса успешно отправлена"/>
        <PlayProposalSuccessLayout/>
      </AppLayout>
    </PageTransition>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { referer } = ctx.req.headers;

  if (!referer) {
    return {
      redirect: {
        destination: '/form',
        permanent: false,
      },
    };
  }

  return {
    props: {}
  };
};

export default PlayProposalSuccess;
