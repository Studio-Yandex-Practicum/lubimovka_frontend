import { NextPage } from 'next';
import Head from 'next/head';

import { HistoryHeader } from 'components/history-header';
import { HistoryTitle } from 'components/history-title/history-title';
import { AppLayout } from 'components/app-layout/index';

import headerData from './assets/mock-data-header.json';
import titleData from './assets/mock-data-title.json';
import itselfData from './assets/mock-data-itself.json';
import { HistoryItself } from 'components/history-itself/history-itself';

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
      <HistoryHeader data={headerData}/>
      <HistoryTitle data={titleData}/>
      <HistoryItself data={itselfData}/>
    </AppLayout>
  );
};

export default History;
