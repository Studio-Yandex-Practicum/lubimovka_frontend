import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';

import { Crewman, HtmlMarkup, Url } from 'shared/types';
import { fetcher } from 'shared/fetcher';
import AppLayout from 'components/app-layout';
import { PerformanceLayout } from 'components/performance-layout';
import { PerformanceHeadline } from 'components/performance-headline';
import { PerformanceDetails } from 'components/performance-details';
import { PerformanceCrew } from 'components/performance-crew';
import { PerformanceRawText } from 'components/performance-raw-text';
import { Share } from 'components/share';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { Video } from 'components/video';
import { Section } from 'components/section';
import { PhotoGallery } from 'components/photo-gallery';
import { ReviewCarousel } from 'components/review-carousel';
import { CritiqueCard } from 'components/critique-card';
import { ReviewCard } from 'components/review-card';

type PerformanceResponse = {
  play: {
    name: string,
    authors: {
      name: string,
    }[],
    city: string,
    year: number,
    url_download: string,
    url_reading: string,
  },
  persons: Crewman[],
  images_in_block: {
    image: Url,
  }[],
  name: string,
  main_image: Url,
  bottom_image: Url,
  video: string,
  description: string,
  text: HtmlMarkup,
  duration: string,
  date: string,
  ticketsUrl: Url,
  age_limit: number,
  critique: {
    text: string,
    logo?: string,
    href: Url,
  }[],
  review: {
    text: string,
    author: string,
  }[],
  short_description: string,
}

const Performance = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element | null=> {
  if (!data) return null;

  return (
    <AppLayout backButton={{path: '/projects',text: 'проекты'}}>
      <PerformanceLayout>
        <PerformanceLayout.Headline>
          <PerformanceHeadline
            title={data.name}
            description={data.short_description}
            date={data.date}
            ticketsUrl={data.ticketsUrl}
            text={data.description}
            image={data.main_image}
          />
        </PerformanceLayout.Headline>
        {data.video && (
          <PerformanceLayout.Video>
            <Video
              link={data.video}
            />
          </PerformanceLayout.Video>
        )}
        <PerformanceLayout.Text>
          <PerformanceRawText>
            {data.text}
          </PerformanceRawText>
        </PerformanceLayout.Text>
        <PerformanceLayout.Play>
          <Section
            type='play'
            title='Почитать пьесу'
            titleTag='h6'
          >
            <BasicPlayCard
              type= 'performance'
              play={{
                title: data.play.name,
                city: data.play.city,
                year: String(data.play.year),
                linkView: data.play.url_reading,
                linkDownload: data.play.url_download,
              }}
              author={{
                id: 0,
                name: data.play.authors[0].name,
              }}
              buttonVisibility
            />
          </Section>
        </PerformanceLayout.Play>
        <PerformanceLayout.Aside>
          <PerformanceDetails duration={data.duration} ageLimit={data.age_limit} />
          <PerformanceCrew crew={data.persons}/>
        </PerformanceLayout.Aside>
        <PerformanceLayout.Gallery>
          <PhotoGallery>
            {data.images_in_block.map(({ image }, index) => (
              <PhotoGallery.Item
                key={index}
                image={image}
              />
            ))}
          </PhotoGallery>
        </PerformanceLayout.Gallery>
        <PerformanceLayout.Critique>
          <ReviewCarousel
            title="Рецензии"
            mode="single"
          >
            {data.critique.map(({ text, logo, href }, index) => (
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
        </PerformanceLayout.Review>
        <PerformanceLayout.BottomImage>
          <Image
            src={data.bottom_image}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </PerformanceLayout.BottomImage>
        <PerformanceLayout.Share>
          <Share
            firstLine='Рассказать'
            secondLine='о спектакле'
            size='l'
          />
        </PerformanceLayout.Share>
      </PerformanceLayout>
    </AppLayout>
  );
};

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  if (!params) return { props: {}};

  const { id } = params;
  const data = await fetcher<PerformanceResponse>(`/library/performances/${id}`);

  return {
    props: {
      data,
    },
  };
};

export default Performance;
