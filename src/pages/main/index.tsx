import {NextPage} from 'next';
import Head from 'next/head';
import cn from 'classnames/bind';

import Title from '../../components/main-title/main-title';
import Events from '../../components/main-events/main-events';
import Aside from '../../components/main-aside/main-aside';
import Banners from '../../components/main-banners/main-banners';
import Platforms from '../../components/main-platforms/main-platforms';
import Archive from '../../components/main-archive/main-archive';
import Partners from '../../components/main-partners/main-partners';
import ShortList from '../../components/main-shortList/main-shortList';

import styles from './main.module.css';

const cx = cn.bind(styles);

interface IMainPageProps {
  metaTitle: string,
  title: string,
  events: boolean,
  aside: boolean,
  banners: boolean,
  platforms: boolean
  archive: boolean,
  partners: boolean,
  shortList: boolean,
}

export const getStaticProps = () => {
  return {
    props: {
      metaTitle: '',
      title: 'Компонент Title',
      events: true,
      aside: true,
      banners: true,
      platforms: true,
      archive: true,
      partners: true,
      shortList: true,
    }
  };
};

const MainPage: NextPage<IMainPageProps> = (props: IMainPageProps) => {
  const {title, metaTitle, events, aside, banners, platforms, archive, partners, shortList} = props;
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <main className={cx('main')}>
        {title && <Title title={title}/>}
        {events && <Events/>}
        {aside && <Aside/>}
        {banners && <Banners/>}
        {platforms && <Platforms/>}
        {shortList && <ShortList/>}
        {archive && <Archive/>}
        {partners && <Partners />}
      </main>
    </>
  );
};


export default MainPage;
