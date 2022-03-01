import { GetServerSideProps, NextPage } from 'next';
import cn from 'classnames/bind';

import { AfishaTitle } from 'components/afisha-page/title';
import { FestivalDays } from 'components/afisha-page/festival-days';
import { RegularEvents } from 'components/afisha-page/regular-events';
import { AppLayout } from 'components/app-layout';
import { fetcher } from 'shared/fetcher';

import data from '../../../mocks/data/afisha.json';
import festivalData from '../../../mocks/assets/afisha/afisha-fesival-data.json';
import regularData from '../../../mocks/assets/afisha/afisha-regular-data.json';
import styles from 'components/afisha-page/afishe.module.css';

const cx = cn.bind(styles);

interface IAfisheProps {
  title: string[],
  festival: boolean,
  regular: boolean,
}

const Afisha: NextPage<IAfisheProps> = () => {
  const {
    title,
    festival,
    regular,
  } = data;

  return (
    <AppLayout>
      <main className={cx('main')}>
        {title && (
          <AfishaTitle
            festival={festival}
            title={festival ? title.festTitle : title.regTitle}
            entrance={title.entrance}
            registration={title.registration}
            discussion={title.discussion}
          />
        )}
        {festival && (
          <FestivalDays data={festivalData}/>
        )}
        {regular && (
          <RegularEvents data={regularData}/>
        )}
      </main>
    </AppLayout>
  );
};

const fetchEvents = async (offset?: number) => {
  return await fetcher<any>(`afisha/_events/?limit=10${offset ? `&offset=${offset}` : ''}`);
};

export const getServerSideProps: GetServerSideProps = async () => {
  let response;

  try {
    response = await fetchEvents();
  } catch (err) {
    return {
      props: {
        errorCode: 500,
      }
    };
  }

  return {
    props: {
      blogEntries: response.results,
      hasMoreEntries: !!response.next,
    }
  };
};

export default Afisha;
