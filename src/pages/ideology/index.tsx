import { NextPage } from 'next';

import TextSection from '../../components/ideology-section';

import textData from './assets/mock-data.json';

const Ideology: NextPage = () => (
  <>
    {textData.map((el) => (
      <TextSection key={el.id} data={el} />
    ))}
  </>
);

export default Ideology;
