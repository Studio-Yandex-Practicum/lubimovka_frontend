import Image from 'next/image';
import classNames from 'classnames/bind';

import { AppLayout } from 'components/app-layout';
import { PerformanceLayout } from 'components/performance-layout';
import { PerformanceHeadline } from 'components/performance-headline';
import { PerformanceDetails } from 'components/performance-details';
import { CreditsList } from 'components/credits-list';
import { HTMLMarkup } from 'components/html-markup';
import { ShareLinks } from 'components/share-links';
import { PlayCard } from 'components/play-card';
import { Video } from 'components/video';
import { Section } from 'components/section';
import { PhotoGallery } from 'components/photo-gallery';
import { PerformanceEventList } from 'components/performance-event-list';
import { ReviewCarousel } from 'components/review-carousel';
import { MediaReviewCard } from 'components/media-review-card';
import { ReviewCard } from 'components/review-card';
import { SEO } from 'components/seo';
import { format } from 'shared/helpers/format-date';
import { InternalServerError } from 'shared/helpers/internal-server-error';
import { fetcher } from 'services/fetcher';
import { notFoundResult } from 'shared/constants/server-side-props';
import { formatDuration } from 'date-fns';
import ru from 'date-fns/locale/ru';

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import type {
  Performance as PerformanceResponse,
  PaginatedPerformanceMediaReviewList,
  PaginatedPerformanceReviewList,
  LocalEvent,
  PerformanceMediaReview,
  PerformanceReview,
} from '__generated__/api-typings';

import styles from 'components/performance-layout/performance-layout.module.css';

const cx = classNames.bind(styles);

const Performance = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    title,
    description,
    intro,
    play,
    team,
    images_in_block,
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
            {events.map(({ date, actionText, actionUrl }) => (
              <PerformanceEventList.Item
                key={date}
                actionText={actionText}
                actionUrl={actionUrl}
                {...date ? { date: format('d MMMM H:mm', new Date(date)) } : {}}
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
              play={{
                title: play.name,
                city: play.city,
                year: play.year,
                readingUrl: play.url_reading,
                downloadUrl: play.url_download,
                authors: play.authors
              }}
            />
          </Section>
        </PerformanceLayout.Content>
        <PerformanceLayout.Gallery>
          <PhotoGallery
            photos={images_in_block.map(({ image }) => ({
              url: image,
            }))}
          />
        </PerformanceLayout.Gallery>
        {mediaReviews && mediaReviews.length > 0 && (
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
        {reviews && reviews.length > 0 && (
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
      images_in_block: performanceResponse.images_in_block,
      main_image: performanceResponse.main_image,
      bottom_image: performanceResponse.bottom_image,
      video: performanceResponse.video,
      text: performanceResponse.text,
      ageRestriction: performanceResponse.age_limit,
      duration: performanceResponse.duration > 0
        ? formatDuration({
          hours: Math.floor(performanceResponse.duration / 3600),
          minutes: Math.floor(performanceResponse.duration % 3600 / 60),
        },
        {
          locale: ru
        })
        : undefined,
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
  return events.map(({ date_time, action_text, action_url }) => ({
    date: date_time,
    actionText: action_text,
    actionUrl: action_url,
  }));
}

function toMediaReviews(reviews: PerformanceMediaReview[]) {
  return reviews.map(({ image, url, text }) => ({
    logo: image,
    text,
    ...url ? { href: url } : {}
  }));
};

function toReviews(reviews: PerformanceReview[]) {
  return reviews.map(({ reviewer_name, url, text }) => ({
    author: reviewer_name,
    text,
    ...url ? { href: url } : {}
  }));
};
