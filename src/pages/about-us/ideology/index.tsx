import { NextPage } from 'next';
import { SEO } from 'components/seo';

import { AppLayout } from 'components/app-layout';
import IdeologyPage from 'components/ideology-page';

import textData from './assets/mock-data.json';

const Ideology: NextPage = () => (
  <AppLayout>
    <SEO
      title="Идеология"
    />
    <IdeologyPage data={textData}/>
  </AppLayout>
);

export default Ideology;
