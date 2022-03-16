import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import cn from 'classnames/bind';

import { AfishaTitle } from 'components/afisha-page/title';
import { FestivalDays } from 'components/afisha-page/festival-days';
import { AppLayout } from 'components/app-layout';
import { fetcher } from 'shared/fetcher';
import { AfishaInfoOutput, PaginatedAfishaEventListOutputList } from 'api-typings';
import { RegularEvents } from 'components/afisha-page/regular-events';

import styles from 'components/afisha-page/afishe.module.css';

const cx = cn.bind(styles);

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
      <main className={cx('main')}>
        <AfishaTitle {...info}/>
        {info.festival_status ? <FestivalDays {...events}/> : <RegularEvents {...events}/>}
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
