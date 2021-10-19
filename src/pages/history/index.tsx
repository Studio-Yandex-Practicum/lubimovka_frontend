import { NextPage } from 'next';
import Head from 'next/head';

import {HistoryHeader} from 'components/history-header';
import {HistoryTitle} from 'components/history-title/history-title';
import { AppLayout } from 'components/app-layout/index';

import textData from './assets/mock-data.json';
import titleData from './assets/mock-datatitle.json';
import itselfData from './assets/mock-dataitself.json';
import {HistoryItself} from 'components/history-itself/history-itself';

interface IHistoryProps {
  metaTitle: string;
}
const History: NextPage<IHistoryProps> = (props: IHistoryProps) => {
  const {
    metaTitle,
  } = props;
  return (
    <AppLayout>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <HistoryHeader data={textData}/>
      <HistoryTitle data={titleData}/>
      <HistoryItself data={itselfData}/>
    </AppLayout>
  );
};

export default History;
