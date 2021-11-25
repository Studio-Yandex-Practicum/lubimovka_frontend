import { NextPage } from 'next';
import Head from 'next/head';

import TextSection from 'components/ideology-section';
import AppLayout from 'components/app-layout';
import { AboutUsMenu } from 'components/what-we-do-page/about-us-menu';

import textData from './assets/mock-data.json';

import style from './index.module.css';

const Ideology: NextPage = () => (
  <AppLayout>
    <Head>
      <title>Идеология</title>
    </Head>
    <div className={style.content}>
      <div className={style.menu}>
        <AboutUsMenu/>
      </div>
      {textData.map((el) => (
        <TextSection key={el.id} data={el}/>
      ))}
    </div>
  </AppLayout>
);

export default Ideology;
