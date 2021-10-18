import {NextPage} from 'next';
import cn from 'classnames/bind';

import {AfisheTitle} from '../../components/afishe-title';
import {FestivalEvents} from '../../components/afishe-festival-events';
import {RegularEvents} from '../../components/afishe-regular-events';

import styles from './afishe.module.css';
import {AppLayout} from '../../components/app-layout';

const cx = cn.bind(styles);

interface IAfisheProps {
  title: string,
  festivalEvents: boolean,
  regularEvents: boolean,
}

export const getStaticProps: () => { props: IAfisheProps } = () => {
  return {
    props: {
      title: 'Компонент Afishe-Title',
      festivalEvents: true,
      regularEvents: false,
    },
  };
};

const Afishe: NextPage<IAfisheProps> = (props: IAfisheProps) => {
  const {
    title,
    festivalEvents,
    regularEvents
  } = props;
  return (
    <AppLayout>
      <main className={cx('main')}>
        {title && <AfisheTitle title={title}/>}
        {festivalEvents && <FestivalEvents/>}
        {regularEvents && <RegularEvents/>}
      </main>
    </AppLayout>
  );
};

export default Afishe;
