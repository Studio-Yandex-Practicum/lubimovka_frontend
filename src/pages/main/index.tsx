import {NextPage} from 'next';
import Head from 'next/head';
import cn from 'classnames/bind';
import {createElement, FC} from 'react';

import data from './assets/mock-data.json';
import metaData from './assets/mock-title.json';
import {MainTitle as Title} from '../../components/main-title/main-title';
import Events from '../../components/main-events/main-events';
import Aside from '../../components/main-aside/main-aside';
import Banners from '../../components/main-banners/main-banners';
import Platforms from '../../components/main-platforms/main-platforms';
import Archive from '../../components/main-archive/main-archive';
import Partners from '../../components/main-partners/main-partners';
import ShortList from '../../components/main-shortList/main-shortList';

import styles from './main.module.css';
const cx = cn.bind(styles);

export interface IMainPageComponent {
  data: {
    title?: string,
    subtitle?: string,
    photo?: string,
  };
}
interface IComponents {
  [key: string]: FC<IMainPageComponent>;
}

const components: IComponents = {
  title: Title,
  events: Events,
  aside: Aside,
  banners: Banners,
  platforms: Platforms,
  archive: Archive,
  partners: Partners,
  shortList: ShortList
};

const MainPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
      </Head>
      <main className={cx('main')}>
        {data.map((el) => createElement(components[el.name], {data: el.content, key: el.name}))}
      </main>
    </>
  );
};

export default MainPage;
