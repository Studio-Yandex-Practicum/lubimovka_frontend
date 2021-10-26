import {NextPage} from 'next';
import cn from 'classnames/bind';

import {AfisheTitle} from 'components/afishe/afishe-title';
import {FestivalDays} from 'components/afishe/afishe-festival-days';
import {RegularDays} from 'components/afishe/afishe-regular-days';
import {AppLayout} from 'components/app-layout';
import data from './mock-data/mock-data.json';

import styles from 'components/afishe/afishe.module.css';

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
