import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { AfishaTitle } from 'components/afisha-page/title';
import { FestivalEvents } from 'components/afisha-page/festival-events';
import { AppLayout } from 'components/app-layout';
import { fetcher } from 'shared/fetcher';
import { AfishaInfoOutput, PaginatedAfishaEventListOutputList } from 'api-typings';
import { RegularEvents } from 'components/afisha-page/regular-events';

interface IAfishaProps {
  info: AfishaInfoOutput,
  events: PaginatedAfishaEventListOutputList
}

const Afisha = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    events,
    info
  } = props;

  return (
    <AppLayout>
      <main>
        <AfishaTitle {...info}/>
        {info.festival_status ? <FestivalEvents {...events}/> : <RegularEvents {...events}/>}
      </main>
    </AppLayout>
  );
};

const fetchEventsFestival = async (date: string) => await fetcher<PaginatedAfishaEventListOutputList>(`afisha/events/?dates=${date}`);
const fetchEventsRegular = async () => await fetcher<PaginatedAfishaEventListOutputList>('afisha/events/?limit=10');

const fetchInfo = async () => await fetcher<AfishaInfoOutput>('afisha/info/');

export const getServerSideProps: GetServerSideProps<IAfishaProps> = async () => {

  try {
    const info = await fetchInfo();
    const events = info.festival_status ? await fetchEventsFestival(info.afisha_dates[0]) : await fetchEventsRegular();

    return {
      props: {
        info,
        events
      }
    };
  } catch {
    return {
      notFound: true
    };
  };
};

export default Afisha;
