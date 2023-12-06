import classNames from 'classnames/bind';
import { format,formatDuration } from 'date-fns';
import Image from 'next/image';

import { AppLayout } from 'components/app-layout';
import { CreditsList } from 'components/credits-list';
import { HTMLMarkup } from 'components/html-markup';
import { ImageGallery } from 'components/image-gallery';
import { MediaReviewCard } from 'components/media-review-card';
import { PerformanceDetails } from 'components/performance-details';
import { PerformanceEventList } from 'components/performance-event-list';
import { PerformanceHeadline } from 'components/performance-headline';
import { PerformanceLayout } from 'components/performance-layout';
import styles from 'components/performance-layout/performance-layout.module.css';
import { PlayCard } from 'components/play-card';
import { ReviewCard } from 'components/review-card';
import { ReviewCarousel } from 'components/review-carousel';
import { Section } from 'components/section';
import { SEO } from 'components/seo';
import { ShareLinks } from 'components/share-links';
import { Video } from 'components/video';
import { fetcher } from 'services/fetcher';
import { notFoundResult } from 'shared/constants/server-side-props';
import { InternalServerError } from 'shared/helpers/internal-server-error';
import { isNonEmpty } from 'shared/helpers/is-non-empty';

import type {
  LocalEvent,
  PaginatedPerformanceMediaReviewList,
  PaginatedPerformanceReviewList,
  PerformanceMediaReview,
  Performance as PerformanceResponse,
  PerformanceReview,
} from '__generated__/api-typings';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

const cx = classNames.bind(styles);

const Performance = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    title,
    description,
    intro,
    play,
    team,
    gallery_images,
    gallery_title,
    main_image,
    bottom_image,
    video,
    text,
    ageRestriction,
    duration,
    events,
    mediaReviews,
    reviews,
  } = props;

  return (
    <AppLayout>
      <SEO
        title={title}
        description={description}
      />
      <PerformanceLayout>
        <PerformanceHeadline
          className={cx('headline')}
          title={title}
          description={description}
          cover={main_image}
        />
        <PerformanceLayout.Events>
          <PerformanceEventList>
            {events.map((event) => (
              <PerformanceEventList.Item
                key={event.date}
                actionText={event.actionText}
                actionUrl={event.actionUrl}
                date={format(new Date(event.date), 'd MMMM H:mm')}
              />
            ))}
          </PerformanceEventList>
        </PerformanceLayout.Events>
        <PerformanceLayout.Summary>
          <PerformanceDetails
            className={cx('details')}
            duration={String(duration)}
            ageRestriction={ageRestriction}
          />
          <CreditsList
            className={cx('team')}
            roles={team}
          />
        </PerformanceLayout.Summary>
        {main_image && (
          <PerformanceLayout.Cover>
            <Image
              src={main_image}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </PerformanceLayout.Cover>
        )}
        <PerformanceLayout.Intro>
          {intro}
        </PerformanceLayout.Intro>
        <PerformanceLayout.Content>
          {video && (
            <Video
              className={cx('video')}
              src={video}
            />
          )}
          <HTMLMarkup
            className={cx('text')}
            markup={text}
          />
          <Section
            type="play"
            title="Почитать пьесу"
            titleTag="h6"
          >
            <PlayCard
              className={cx('card_in_performance')}
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
          </Section>
        </PerformanceLayout.Content>
        <PerformanceLayout.Gallery>
          <ImageGallery
            title={gallery_title}
            items={gallery_images.map(({ url }) => ({
              url,
            }))}
          />
        </PerformanceLayout.Gallery>
        {isNonEmpty(mediaReviews) && (
          <PerformanceLayout.MediaReviews>
            <ReviewCarousel
              title="Рецензии"
              mode="single"
            >
              {mediaReviews.map(({ text, logo, href }, index) => (
                <MediaReviewCard
                  key={index}
                  text={text}
                  logo={logo}
                  href={href}
                />
              ))}
            </ReviewCarousel>
          </PerformanceLayout.MediaReviews>
        )}
        {isNonEmpty(reviews) && (
          <PerformanceLayout.Reviews>
            <ReviewCarousel
              title="Отзывы зрителей"
              mode="multiple"
            >
              {reviews.map(({ text, author }, index) => (
                <ReviewCard
                  key={index}
                  text={text}
                  author={author}
                />
              ))}
            </ReviewCarousel>
          </PerformanceLayout.Reviews>
        )}
        <PerformanceLayout.BottomImage>
          <Image
            src={bottom_image}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </PerformanceLayout.BottomImage>
        <PerformanceLayout.Share>
          <ShareLinks
            firstLine="Рассказать"
            secondLine="о спектакле"
          />
        </PerformanceLayout.Share>
      </PerformanceLayout>
    </AppLayout>
  );
};

export default Performance;

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<Record<'id', string>>) => {
  const { id: performanceId } = params!;
  let performanceResponse;
  let mediaReviewsResponse;
  let reviewsResponse;

  try {
    [performanceResponse, mediaReviewsResponse, reviewsResponse] = await Promise.all([
      fetcher<PerformanceResponse>(`/afisha/performances/${performanceId}/`),
      fetcher<PaginatedPerformanceMediaReviewList>(`/afisha/performances/${performanceId}/media-reviews/`),
      fetcher<PaginatedPerformanceReviewList>(`/afisha/performances/${performanceId}/reviews/`),
    ]);
  } catch ({ statusCode }) {
    switch (statusCode) {
    case 404:
      return notFoundResult;
    default:
      throw new InternalServerError();
    }
  }

  return {
    props: {
      title: performanceResponse.name,
      intro: performanceResponse.intro,
      description: performanceResponse.description,
      play: performanceResponse.play,
      team: performanceResponse.team,
      gallery_images: performanceResponse.gallery_images,
      gallery_title: performanceResponse.gallery_title,
      main_image: performanceResponse.main_image,
      bottom_image: performanceResponse.bottom_image,
      video: performanceResponse.video,
      text: performanceResponse.text,
      ageRestriction: performanceResponse.age_limit,
      duration: formatPerformanceDuration(performanceResponse.duration),
      events: toEvents(performanceResponse.events),
      // TODO: сейчас в ответе API возвращаются списки отзывов с пагинацией, которая фронтенду не нужна, нужно обсудить с бекендерами
      mediaReviews: mediaReviewsResponse.results
        ? toMediaReviews(mediaReviewsResponse.results)
        : null,
      reviews: reviewsResponse.results
        ? toReviews(reviewsResponse.results)
        : null,
    },
  };
};

function toEvents(events: LocalEvent[]) {
  return events.map((event) => ({
    date: event.date_time as string, // TODO: уточнить у бекенда, почему дата события может быть опциональной
    actionText: event.action_text ?? undefined,
    actionUrl: event.action_url ?? undefined,
  }));
}

function toMediaReviews(reviews: PerformanceMediaReview[]) {
  return reviews.map(({ image, url, text }) => ({
    logo: image,
    text,
    ...url ? { href: url } : {}
  }));
}

function toReviews(reviews: PerformanceReview[]) {
  return reviews.map(({ reviewer_name, url, text }) => ({
    author: reviewer_name,
    text,
    ...url ? { href: url } : {}
  }));
}

function formatPerformanceDuration(durationInMs: number) {
  return formatDuration({
    hours: Math.floor(durationInMs / 3600),
    minutes: Math.floor(durationInMs % 3600 / 60),
  });
}
