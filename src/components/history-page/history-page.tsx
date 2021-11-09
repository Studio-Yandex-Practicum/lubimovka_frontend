import { FC } from 'react';
import Head from 'next/head';

import { HistoryHeader } from './header';
import { HistoryTitle } from './title';
import { HistoryItself } from './itself';

import headerData from './assets/mock-data-header.json';
import titleData from './assets/mock-data-title.json';
import itselfData from './assets/mock-data-itself.json';

interface IHistoryPageProps {
  metaTitle: string;
}
export const HistoryPage: FC<IHistoryPageProps> = (props: IHistoryPageProps) => {
  const {
    metaTitle,
  } = props;
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <HistoryHeader data={headerData}/>
      <HistoryTitle data={titleData}/>
      <HistoryItself data={itselfData}/>
    </>
  );
};
