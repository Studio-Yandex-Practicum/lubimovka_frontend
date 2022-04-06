import Image from 'next/image';
import classNames from 'classnames/bind';

import { AppLayout } from 'components/app-layout';
import { PerformanceLayout } from 'components/performance-layout';
import { PerformanceHeadline } from 'components/performance-headline';
import { PerformanceDetails } from 'components/performance-details';
import { PerformanceTeam } from 'components/performance-team';
import { HTMLMarkup } from 'components/html-markup';
import { Share } from 'components/share';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { Video } from 'components/video';
import { Section } from 'components/section';
import { PhotoGallery } from 'components/photo-gallery';
import { PerformanceEventList } from 'components/persormace-event-list';
// import { ReviewCarousel } from 'components/review-carousel';
// import { CritiqueCard } from 'components/critique-card';
// import { ReviewCard } from 'components/review-card';
import { format } from 'shared/helpers/format-date';
import { fetcher } from 'shared/fetcher';

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import type {
  Performance as PerformanceResponse,
  PaginatedPerformanceMediaReviewList,
  PaginatedPerformanceReviewList,
  LocalEvent,
} from 'api-typings';

import styles from 'components/performance-layout/performance-layout.module.css';

const cx = classNames.bind(styles);

const Performance = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    title,
    description,
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
    // mediaReviews,
    // reviews,
  } = props;

  return (
    <AppLayout>
      <PerformanceLayout>
        <PerformanceHeadline
          className={cx('headline')}
          title={title}
          description={description}
          text={description}
          cover={main_image}
          actions={(
            <PerformanceEventList>
              {events.map(({ date, ticketsUrl }) => (
                <PerformanceEventList.Item
                  key={date}
                  date={format('d MMMM H:mm', new Date(date))}
                  ticketsUrl={ticketsUrl}
                />
              ))}
            </PerformanceEventList>
          )}
        />
        <PerformanceLayout.Summary>
          <PerformanceDetails
            className={cx('details')}
            duration={duration}
            ageRestriction={ageRestriction}
          />
          <PerformanceTeam
            className={cx('team')}
            team={team}
          />
        </PerformanceLayout.Summary>
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
            className={cx('play')}
            type="play"
            title="Почитать пьесу"
            titleTag="h6"
          >
            <BasicPlayCard
              type="performance"
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
            photos={images_in_block.map(({ image, title }) => ({
              url: image,
              description: title,
            }))}
          />
        </PerformanceLayout.Gallery>
        {/* <PerformanceLayout.Critique>
          <ReviewCarousel
            title="Рецензии"
            mode="single"
          >
            {critique.map(({ text, logo, href }, index) => (
              <CritiqueCard
                key={index}
                text={text}
                logo={logo}
                href={href}
              />
            ))}
          </ReviewCarousel>
        </PerformanceLayout.Critique>
        <PerformanceLayout.Review>
          <ReviewCarousel
            title="Отзывы зрителей"
            mode="multiple"
          >
            {data.review.map(({ text, author }, index) => (
              <ReviewCard
                key={index}
                text={text}
                author={author}
              />
            ))}
          </ReviewCarousel>
        </PerformanceLayout.Review> */}
        <PerformanceLayout.BottomImage>
          <Image
            src={bottom_image}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </PerformanceLayout.BottomImage>
        <PerformanceLayout.Share>
          <Share
            firstLine="Рассказать"
            secondLine="о спектакле"
            size="l"
          />
        </PerformanceLayout.Share>
      </PerformanceLayout>
    </AppLayout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext<Record<'id', string>>) => {
  const notFoundResult = {
    notFound: true,
  } as const;

  if (!ctx.params) {
    return notFoundResult;
  }

  const { id: performanceId } = ctx.params;
  let performanceResponse: PerformanceResponse;
  let mediaReviewsResponse;
  let reviewsResponse;

  try {
    [performanceResponse, mediaReviewsResponse, reviewsResponse] = await Promise.all([
      fetcher<PerformanceResponse>(`/library/performances/${performanceId}/`),
      fetcher<PaginatedPerformanceMediaReviewList>(`/library/performances/${performanceId}/media-reviews/`),
      fetcher<PaginatedPerformanceReviewList>(`/library/performances/${performanceId}/reviews/`),
    ]);
  } catch {
    return notFoundResult;
  }

  return {
    props: {
      title: performanceResponse.name,
      description: performanceResponse.description,
      play: performanceResponse.play,
      team: performanceResponse.team,
      images_in_block: performanceResponse.images_in_block,
      main_image: performanceResponse.main_image,
      bottom_image: performanceResponse.bottom_image,
      video: performanceResponse.video,
      text: performanceResponse.text,
      ageRestriction: performanceResponse.age_limit,
      duration: performanceResponse.duration,
      events: toEvents(performanceResponse.events),
      // TODO: сейчас в ответе API возвращаются списки отзывов с пагинацией, которая фронтенду не нужна, нужно обсудить с бекендерами
      mediaReviews: mediaReviewsResponse.results,
      reviews: reviewsResponse.results,
    },
  };
};

export default Performance;

function toEvents(events: LocalEvent[]) {
  return events.map((event) => ({
    date: event.date_time,
    ticketsUrl: event.url,
  }));
}
