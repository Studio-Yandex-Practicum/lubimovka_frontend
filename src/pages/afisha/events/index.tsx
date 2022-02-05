import { NextPage } from 'next';
import cn from 'classnames/bind';

import { AfishaTitle } from 'components/afisha-page/title';
import { FestivalDays } from 'components/afisha-page/festival-days';
import { RegularEvents } from 'components/afisha-page/regular-events';
import { AppLayout } from 'components/app-layout';

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
        {title &&
          <AfishaTitle
            festival={festival}
            title={festival ? title.festTitle : title.regTitle}
            entrance={title.entrance}
            registration={title.registration}
            discussion={title.discussion}
          />
        }
        {festival &&
          <FestivalDays data={festivalData}/>
        }
        {regular &&
          <RegularEvents data={regularData}/>
        }
      </main>
    </AppLayout>
  );
};

export default Afisha;
