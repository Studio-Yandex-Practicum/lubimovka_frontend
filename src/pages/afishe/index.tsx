import { NextPage } from 'next';
import cn from 'classnames/bind';

import { AfisheTitle } from 'components/afishe-page/title';
import { FestivalDays } from 'components/afishe-page/festival-days';
import { RegularDays } from 'components/afishe-page/regular-days';
import { AppLayout } from 'components/app-layout';

import data from './assets/mock-data.json';
import festivalData from './assets/afishe-fesival-data.json';
import styles from 'components/afishe-page/afishe.module.css';

const cx = cn.bind(styles);

interface IAfisheProps {
  title: string[],
  festival: boolean,
  regular: boolean,
}

const Afishe: NextPage<IAfisheProps> = () => {
  const {
    title,
    festival,
    regular,
  } = data;
  return (
    <AppLayout>
      <main className={cx('main')}>
        {title && <AfisheTitle festival={festival} title={festival ? title.festTitle : title.regTitle} entrance={title.entrance} registration={title.registration} discussion={title.discussion}/>}
        {festival && <FestivalDays data={festivalData}/>}
        {regular && <RegularDays/>}
      </main>
    </AppLayout>
  );
};

export default Afishe;
