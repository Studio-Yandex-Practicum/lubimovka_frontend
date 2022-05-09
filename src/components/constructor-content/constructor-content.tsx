// @ts-nocheck
// TODO: уточнить у бекендеров, возможно, получится сразу в схеме указать enum для content_type блоков

import { Fragment } from 'react';
import classNames from 'classnames/bind';

import { PhotoGallery } from 'components/photo-gallery';
import { Section } from 'components/section';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { PerformanceSection } from 'components/performance-section';
import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { PersonCard } from 'components/ui/person-card';
import { PersonCardList } from 'components/person-card-list';
import { Video } from 'components/video';
import { VideoList } from 'components/video-list';
import { HTMLMarkup } from 'components/html-markup';
import { format } from 'shared/helpers/format-date';

import type { FC } from 'react';
import type {
  ImagesBlock,
  PersonsBlock,
  PlaysBlock,
  EventsBlock,
  VideosBlock,
  Text,
} from 'api-typings';

import styles from './constructor-content.module.css';

enum ConstructorBlockType {
  events = 'eventsblock',
  images = 'imagesblock',
  plays = 'playsblock',
  videos = 'videosblock',
  persons = 'personsblock',
  text = 'text',
}
export type ConstructorBlock = {
  content_type: ConstructorBlockType.images
  content_item: ImagesBlock
} | {
  content_type: ConstructorBlockType.persons
  content_item: PersonsBlock
} | {
  content_type: ConstructorBlockType.plays
  content_item: PlaysBlock
} | {
  content_type: ConstructorBlockType.events
  content_item: EventsBlock
} | {
  content_type: ConstructorBlockType.videos
  content_item: VideosBlock
} | {
  content_type: ConstructorBlockType.text
  content_item: Text
}

interface ConstructorContentProps {
  blocks: ConstructorBlock[]
}

const cx = classNames.bind(styles);

export const ConstructorContent: FC<ConstructorContentProps> = (props) => {
  const { blocks } = props;

  return (
    <div className={cx('root')}>
      {blocks.map(({ content_type, content_item }, index) => (
        <Fragment key={index}>
          {content_type === ConstructorBlockType.text && (
            <HTMLMarkup
              markup={content_item.text}
            />
          )}
          {content_type === ConstructorBlockType.images && (
            <Section
              type="projects"
              title={content_item.title}
            >
              <PhotoGallery
                photos={content_item.items.map(({ image, title }) => ({
                  url: image,
                  description: title,
                }))}
              />
            </Section>
          )}
          {content_type === ConstructorBlockType.plays && (
            <Section
              type="projects"
              title={content_item.title}
            >
              <BasicPlayCardList>
                {content_item.items.map(({ id, name, city, year, authors }) => (
                  <BasicPlayCard
                    key={id}
                    play={{
                      title: name,
                      city,
                      year,
                      authors: authors,
                    }}
                  />
                ))}
              </BasicPlayCardList>
            </Section>
          )}
          {content_type === ConstructorBlockType.events && (
            <PerformanceSection title={content_item.title}>
              {content_item.items.map(({
                id,
                date_time,
                event_body: {
                  name,
                  team,
                  image,
                  project_title,
                },
                url,
              }) => (
                <AnnouncedPlayCard
                  key={id}
                  isPerformance
                  id={id}
                  formattedDate={format('d MMMM', new Date(date_time))}
                  formattedTime={format('H:mm', new Date(date_time))}
                  title={name}
                  team={team}
                  buttonLink={url}
                  imageUrl={image}
                  project={project_title}
                  paid
                />
              ))}
            </PerformanceSection>
          )}
          {content_type === ConstructorBlockType.persons && (
            <Section
              type="projects"
              title={content_item.title}
            >
              <PersonCardList>
                {content_item.items.map(({ id, first_name, last_name, image, roles }) => (
                  <PersonCard
                    key={id}
                    name={`${first_name} ${last_name}`}
                    image={image}
                    participant
                    about={roles.map(role => role.name).join(', ')}
                  />
                ))}
              </PersonCardList>
            </Section>
          )}
          {content_type === ConstructorBlockType.videos && (
            <Section
              type="projects"
              title={content_item.title}
            >
              <VideoList>
                {content_item.items.map(({ url }) => (
                  <Video
                    key={url}
                    src={url}
                  />
                ))}
              </VideoList>
            </Section>
          )}
        </Fragment>
      ))}
    </div>
  );
};
