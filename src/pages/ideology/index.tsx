import { NextPage } from 'next';

import TextSection from '../../components/ideology-section';

import textData from './assets/mock-data.json';

import style from './ideology.module.css';

const Ideology: NextPage = () => (
  <div className={style.page}>
    <TextSection isSectionSecond={false} number="1" title="Мы твердо верим, что" data={textData.slice(0, 3)} />
    <TextSection isSectionSecond={true} number="2" title="Мы искренне хотим" data={textData.slice(3)} />
  </div>
);

export default Ideology;
