import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useMemo } from 'react';
import cn from 'classnames/bind';

import * as breakpoints from 'shared/breakpoints.js';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import { AppLayout } from 'components/app-layout';
import { AuthorOverview } from 'components/author-page/overview';
import { AuthorPlays } from 'components/author-page/plays';
import { AnotherPlays } from 'components/author-page/another-plays';
import { AuthorInformation } from 'components/author-page/information';
import { AuthorRequest } from 'components/author-page/request';
import { AuthorRetrieve as AuthorRetrieveModel } from 'api-typings';
import { fetcher } from 'shared/fetcher';
import { zero } from '../shared/constants/numbers';

import styles from 'components/author-page/author.module.css';

const cx = cn.bind(styles);

const fetchAuthors = async (authorId: string) => {
  let data;

  try {
    data = await fetcher<AuthorRetrieveModel>(`/library/authors/${authorId}/`);
  } catch (error) {
    return;
  }
  return data;
};

export const getServerSideProps: GetServerSideProps<AuthorRetrieveModel, Record<'author', string>> = async ({ params }) => {
  const { author: authorSlug } = params!;

  const author = await fetchAuthors(authorSlug);

  if (!author) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...author,
    },
  };
};

const Author = (props: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const {
    plays,
    other_plays: anotherPlays,
    other_links: otherLinks,
  } = props;

  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);

  const notPinnedLinks = useMemo(() => otherLinks.filter((item) => {
    return !item.is_pinned;
  }), [otherLinks]);

  const availablePlays = !isMobile && plays.length > zero;
  const availableAnotherPlays = anotherPlays.length > zero;
  const availableNotPinnedLinks = notPinnedLinks.length > zero;

  return (
    <AppLayout
      navbarProps={{
        colors: 'brand',
      }}
    >
      <div className={cx('author')}>
        <AuthorOverview
          props={props}
        />
        {availablePlays && (
          <AuthorPlays
            plays={plays}
          />
        )}
        {availableAnotherPlays && (
          <AnotherPlays
            links={anotherPlays}
          />
        )}
        {availableNotPinnedLinks && (
          <AuthorInformation
            links={notPinnedLinks}
          />
        )}
        <AuthorRequest/>
      </div>
    </AppLayout>
  );
};

export default Author;
