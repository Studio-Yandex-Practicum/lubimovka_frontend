import cn from 'classnames/bind';

import { AppLayout } from 'components/app-layout';
import { AnotherPlays } from 'components/author-page/another-plays';
import styles from 'components/author-page/author.module.css';
import { AuthorInformation } from 'components/author-page/information';
import { AuthorOverview } from 'components/author-page/overview';
import { CallToEmail } from 'components/call-to-email';
import { PlayCard } from 'components/play-card';
import { PlayList } from 'components/play-list';
import { Section } from 'components/section';
import { SEO } from 'components/seo';
import { useSettings } from 'services/api/settings-adapter';
import { fetcher, HttpRequestError } from 'services/fetcher';
import * as breakpoints from 'shared/breakpoints.js';
import { notFoundResult } from 'shared/constants/server-side-props';
import { InternalServerError } from 'shared/helpers/internal-server-error';
import { useMediaQuery } from 'shared/hooks/use-media-query';

import type { AuthorRetrieve, Play } from '__generated__/api-typings';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

const cx = cn.bind(styles);

const Author = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const { settings } = useSettings();

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
      <SEO title={name}/>
      <div className={cx('author')}>
        <AuthorOverview
          image={image}
          name={name}
          city={city}
          quote={quote}
          biography={biography}
          other_links={additionalLinks}
          achievements={achievements}
          social_networks={social_networks}
          email={email}
          plays={plays}
        />
        {!isMobile && plays.length > 0 && (
          <Section type="author-plays">
            <PlayList>
              {plays.map((play) => (
                <PlayList.Item key={play.id}>
                  <PlayCard
                    title={play.name}
                    city={play.city}
                    year={play.year?.toString()}
                    readingUrl={play.url_reading}
                    downloadUrl={play.url_download}
                    authors={play.authors.map((author) => ({
                      fullName: author.name,
                      slug: author.slug,
                    }))}
                  />
                </PlayList.Item>
              ))}
            </PlayList>
          </Section>
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
        {settings?.emailAddresses.forPlayAuthors && (
          <Section type="author-call-to-email">
            <CallToEmail
              type="author"
              description="Это ваша страница? Если вы хотите внести изменения, пожалуйста, напишите нам на "
              email={settings.emailAddresses.forPlayAuthors}
            />
          </Section>
        )}
      </div>
    </AppLayout>
  );
};

export default Author;

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<Record<'author', string>>) => {
  const { author: slug } = params!;
  let author;

  try {
    author = await fetcher<AuthorRetrieve>(`/library/authors/${slug}/`);
  } catch (error) {
    if (error instanceof HttpRequestError) {
      switch (error.response.statusCode) {
      case 404:
        return notFoundResult;
      default:
        throw new InternalServerError();
      }
    }

    throw error;
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
}
