import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { AfishaTitle } from 'components/afisha-page/title';
import { FestivalEvents } from 'components/afisha-page/festival-events';
import { AppLayout } from 'components/app-layout';
import { AfishaInfoOutput, PaginatedAfishaEventListOutputList } from 'api-typings';
import { RegularEvents } from 'components/afisha-page/regular-events';
import { FestivalProvider } from 'components/afisha-page/festival-provider/festival-provider';
import { fetchEventsFestival, fetchEventsRegular, fetchInfo } from 'components/afisha-page/utils/fetchData';

interface IAfishaProps {
  info: AfishaInfoOutput;
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
        {info.festival_status ? 
          <FestivalProvider events={events} info={info}>
            <FestivalEvents/>
          </FestivalProvider>
          : <RegularEvents {...events}/>}
      </main>
    </AppLayout>
  );
};

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
