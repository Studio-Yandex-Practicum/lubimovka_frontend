import {NextPage} from 'next';
import cn from 'classnames/bind';

import {AfisheTitle} from '../../components/afishe-title';
import {FestivalDays} from '../../components/afishe-festival-days';
import {RegularEvents} from '../../components/afishe-regular-events';
import {AppLayout} from '../../components/app-layout';
import data from './mock-data/mock-data.json';

import styles from './afishe.module.css';

const cx = cn.bind(styles);

interface IAfisheProps {
  title: string,
  festivalDays: boolean,
  regularEvents: boolean,
}

export const getStaticProps: () => { props: IAfisheProps } = () => {
  return {
    props: {
      title: 'Компонент Afishe-Title',
      festivalDays: true,
      regularEvents: false,
    },
  };
};

const Afishe: NextPage<IAfisheProps> = (props: IAfisheProps) => {
  const {
    title,
    festivalDays,
    regularEvents,
  } = props;
  return (
    <AppLayout>
      <main className={cx('main')}>
        {title && <AfisheTitle title={title}/>}
        {festivalDays && <FestivalDays data={data}/>}
        {regularEvents && <RegularEvents/>}
      </main>
    </AppLayout>
  );
};

export default Afishe;
