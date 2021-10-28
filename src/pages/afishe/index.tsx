import {NextPage} from 'next';
import cn from 'classnames/bind';

import {AfisheTitle} from 'components/afishe-page/title';
import {FestivalDays} from 'components/afishe-page/festival-days';
import {RegularDays} from 'components/afishe-page/regular-days';
import {AppLayout} from 'components/app-layout';
import data from './assets/mock-data.json';

import styles from 'components/afishe-page/afishe.module.css';

const cx = cn.bind(styles);

interface IAfisheProps {
  title: string,
  festival: boolean,
  regular: boolean,
}

export const getStaticProps: () => { props: IAfisheProps } = () => {
  return {
    props: {
      title: 'Компонент Afishe-Title',
      festival: true,
      regular: false,
    },
  };
};

const Afishe: NextPage<IAfisheProps> = (props: IAfisheProps) => {
  const {
    title,
    festival,
    regular,
  } = props;
  return (
    <AppLayout>
      <main className={cx('main')}>
        {title && <AfisheTitle title={title}/>}
        {festival && <FestivalDays data={data}/>}
        {regular && <RegularDays/>}
      </main>
    </AppLayout>
  );
};

export default Afishe;
