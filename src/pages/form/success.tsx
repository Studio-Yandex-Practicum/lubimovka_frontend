import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { PageTransition } from 'components/page-transition';
import { PlayProposalSuccessLayout } from 'components/play-proposal-success-layout';
import { AppLayout } from 'components/app-layout';

interface IPlayProposalSuccessProps {
  referer: string | null,
}
const PlayProposalSuccess = ({ referer }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      {referer && (
        <PageTransition type="rightToLeft">
          <AppLayout>
            <PlayProposalSuccessLayout/>
          </AppLayout>
        </PageTransition>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPlayProposalSuccessProps> = async (ctx) => {
  const referer = ctx.req.headers.referer;

  if (!referer) {
    return {
      redirect: {
        // TODO: заменить на 404, когда страница будет готова
        destination: '/form',
        permanent: false,
      },
    };
  }

  return {
    props: {
      referer,
    }
  };
};

export default PlayProposalSuccess;
