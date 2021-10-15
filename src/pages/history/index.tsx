import { NextPage } from 'next';

import HistoryHeader from '../../components/history-header';
import HistoryTitle from 'components/history-title/history-title';

import textData from './assets/mock-data.json';
import titleData from './assets/mock-datatitle.json';
import itselfData from './assets/mock-dataitself.json';
import HistoryItself from 'components/history-itself/history-itself';

const History: NextPage = () => (
  <>
    <HistoryHeader data={textData}/>
    <HistoryTitle data={titleData}/>
    <HistoryItself data={itselfData}/>
  </>
);

export default History;
