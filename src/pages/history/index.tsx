import { NextPage } from 'next';

import HistoryHeader from '../../components/history-header';

import textData from './assets/mock-data.json';

const History: NextPage = () => (
  <>
    <HistoryHeader data={textData}/>

  </>
);

export default History;
