import { NextPage } from 'next';
import AppLayout from 'components/app-layout';
import { AuthorOverview } from 'components/author-page/overview';
import { AuthorPlays } from 'components/author-page/plays';
import { AnotherPlays } from 'components/author-page/another-plays';
import { AuthorInformation } from 'components/author-page/information';
import { AuthorRequest } from 'components/author-page/request';

import overviewData from './assets/overview-author-data.json';
import playsShortListData from './assets/plays-short-list-data.json';
import anotherPlaysData from './assets/another-plays-data.json';
import informationData from './assets/information-author-data.json';

import cn from 'classnames';
import styles from 'components/author-page/author.module.css';

const Author: NextPage = () => {
  return (
    <AppLayout backButton={{ path: '/library', text: 'библиотека' }}>
      <div className={cn(styles.author)}>
        <AuthorOverview data={overviewData}/>
        <AuthorPlays data={playsShortListData}/>
        <AnotherPlays data={anotherPlaysData}/>
        <AuthorInformation data={informationData}/>
        <AuthorRequest/>
      </div>
    </AppLayout>
  );
};

export default Author;
