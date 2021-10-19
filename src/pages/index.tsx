import { NextPage } from 'next';
import data from 'components/main-page/assets/mock-data.json';

import { AppLayout } from '../components/app-layout';
import { MainPage } from 'components/main-page';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <MainPage
        title={data.title}
        metaTitle={data.metaTitle}
        events={data.events}
        aside={data.aside}
        banners={data.banners}
        archive={data.archive}
        platforms={data.platforms}
        shortList={data.shortList}
        partners={data.partners}
      />
    </AppLayout>
  );
};

export default Home;
