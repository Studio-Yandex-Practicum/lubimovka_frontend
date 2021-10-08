import { NextPage } from 'next';

import HistoryHeader from '../../components/history-header';
import HistoryTitle from 'components/history-title/history-title';

import textData from './assets/mock-data.json';
import titleData from './assets/mock-datatitle.json';

const History: NextPage = () => (
  <>
    <HistoryHeader data={textData}/>
    <HistoryTitle data={titleData}/>
  </>
);

export default History;
