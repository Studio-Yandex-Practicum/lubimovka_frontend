import Error from 'next/error';
import cn from 'classnames/bind';

import { AppLayout } from 'components/app-layout';
import { AuthorOverview } from 'components/author-page/overview';
import { AuthorPlays } from 'components/author-page/plays';
import { AnotherPlays } from 'components/author-page/another-plays';
import { AuthorInformation } from 'components/author-page/information';
import { AuthorRequest } from 'components/author-page/request';
import { fetcher } from 'shared/fetcher';
import * as breakpoints from 'shared/breakpoints.js';
import { useMediaQuery } from 'shared/hooks/use-media-query';

import styles from 'components/author-page/author.module.css';

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import type { AuthorRetrieve, Play } from 'api-typings';

const cx = cn.bind(styles);

const Author = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);

  if ('errorCode' in props) {
    return (
      <Error statusCode={props.errorCode}/>
    );
  }

  const {
    name,
    city,
    quote,
    biography,
    achievements,
    social_networks,
    email,
    additionalLinks,
    plays,
    image,
    additionalPlayLinks,
  } = props;
  const notPinnedLinks = additionalLinks.filter((item) => !item.is_pinned);

  return (
    <AppLayout
      navbarProps={{
        colors: 'brand',
      }}
    >
      <div className={cx('author')}>
        <AuthorOverview
          props={{
            image,
            name,
            city,
            quote,
            biography,
            other_links: additionalLinks,
            achievements,
            social_networks,
            email,
            plays,
          }}
        />
        {!isMobile && plays.length > 0 && (
          <AuthorPlays
            plays={plays}
          />
        )}
        {additionalPlayLinks.length > 0 && (
          <AnotherPlays
            links={additionalPlayLinks}
          />
        )}
        {notPinnedLinks.length > 0 && (
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

export const getServerSideProps = async (ctx: GetServerSidePropsContext<Record<'author', string>>) => {
  const notFoundResult = {
    notFound: true,
  } as const;
  const serverErrorResult = {
    props: {
      errorCode: 500,
    },
  } as const;

  if (!ctx.params) {
    return notFoundResult;
  }

  const { author: slug } = ctx.params;
  let author: AuthorRetrieve;

  try {
    author = await fetcher(`/library/authors/${slug}/`);
  } catch {
    return serverErrorResult;
  }

  if (!author) {
    return notFoundResult;
  }

  return {
    props: {
      name: author.name,
      city: author.city,
      quote: author.quote,
      biography: author.biography,
      achievements: author.achievements,
      social_networks: author.social_networks,
      email: author.email,
      additionalLinks: author.other_links,
      plays: author.plays,
      image: author.image,
      additionalPlayLinks: toAdditionalPlayLinks(author.other_plays),
    },
  };
};

function toAdditionalPlayLinks(plays: Play[]) {
  return plays.map(({ name, url_download }) => ({
    title: name,
    ...url_download ? { href: url_download } : {},
  }));
};
