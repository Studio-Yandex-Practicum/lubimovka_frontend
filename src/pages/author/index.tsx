import { NextPage } from 'next';
import AppLayout from 'components/app-layout';
import { AuthorOverview } from 'components/author-page/overview';
import { AuthorPlays } from 'components/author-page/plays';
import { AnotherPlays } from 'components/author-page/another-plays';
import { AuthorInformation } from 'components/author-page/information';
import { AuthorRequest } from 'components/author-page/request';

// JSON-data
import playsShortListData from './assets/plays-short-list-data.json';
import anotherPlaysData from './assets/another-plays-data.json';

import cn from 'classnames';
import styles from 'components/author-page/author.module.css';

interface IAuthorPageProps {
  title: string;
}

const Author: NextPage<IAuthorPageProps> = (props: IAuthorPageProps) => {
  return (
    <AppLayout>
      <div className={ cn(styles.author) }>
        <AuthorOverview />
        <AuthorPlays data={ playsShortListData } />
        <AnotherPlays data={ anotherPlaysData } />
        <AuthorInformation />
        <AuthorRequest />
      </div>
    </AppLayout>
  );
};

export default Author;
