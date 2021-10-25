import { NextPage } from 'next';
import { AppLayout } from 'components/app-layout';
import { AuthorOverview } from 'components/author-page/overview';
import { AuthorPlays } from 'components/author-page/plays';
import { AnotherPlays } from 'components/author-page/another-plays';
import { AuthorInformation } from 'components/author-page/information';
import { AuthorRequest } from 'components/author-page/request';

import cn from 'classnames';
import styles from 'components/author-page/author.module.css';

interface IAuthorPageProps {
  title: string;
}

const Index: NextPage<IAuthorPageProps> = (props: IAuthorPageProps) => {
  return (
    <>
      <AppLayout />
      <div className={ cn(styles.author) }>
        <AuthorOverview />
        <AuthorPlays />
        <AnotherPlays />
        <AuthorInformation />
        <AuthorRequest />
      </div>
    </>
  );
};

export default Index;
