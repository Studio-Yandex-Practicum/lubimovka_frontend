import { NextPage } from 'next';
import cn from 'classnames';
import styles from '../../components/author-page/author.module.css';

import { AuthorOverview } from '../../components/author-page/overview';
import { AuthorPlays } from '../../components/author-page/plays';
import { AnotherPlays } from '../../components/author-page/another-plays';
import { AuthorInformation } from '../../components/author-page/information';
import { AuthorRequest } from '../../components/author-page/request';

import { AppLayout } from '../../components/app-layout';

interface IAuthorPageProps {
  title: string;
}

const Index: NextPage<IAuthorPageProps> = (props: IAuthorPageProps) => {
  return (
    <>
      <AppLayout/>
      <div className={ cn(styles.page) }>
        <div className={ cn(styles.author) }>
          <AuthorOverview />
          <AuthorPlays />
          <AnotherPlays />
          <AuthorInformation />
          <AuthorRequest />
        </div>
      </div>
    </>
  );
};

export default Index;
