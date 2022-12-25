//@ts-nocheck
import { Fragment } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { PhotoGallery } from 'components/photo-gallery';
import { ImageSlider } from 'components/ui/image-slider';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import { PlayCard } from 'components/play-card';
import { EventCard } from 'components/event-card';
import { PersonCard } from 'components/ui/person-card';
import { PersonCardList } from 'components/person-card-list';
import { Video } from 'components/video';
import { VideoList } from 'components/video-list';
import { HTMLMarkup } from 'components/html-markup';
import { ConstructorLink } from 'components/constructor-link';
import { format } from 'shared/helpers/format-date';
import { ConstructorContentSection } from './section';
import { ConstructorBlockType } from './constructor-content.const';
import { ConstructorContentContextProvider } from './constructor-content.context';

import type { FC } from 'react';
import type { ConstructorBlock } from './constructor-content.types';

import defaultStyles from './variant/default.module.css';
import { EventList } from 'components/event-list';

enum Variant {
  Default = 'default',
  Project = 'project',
}

interface ConstructorContentProps {
  variant: `${Variant}`
  blocks: ConstructorBlock[]
}

const variants = {
  default: defaultStyles,
};

export const ConstructorContent: FC<ConstructorContentProps> = (props) => {
  const {
    variant = Variant.Default,
    blocks,
  } = props;
  const cx = classNames.bind(variants.default);

  return (
    <ConstructorContentContextProvider
      value={{
        styles: variants.default,
      }}
    >
      <div className={cx('root')}>
        {blocks.map(({ content_type, content_item }, index) => (
          <Fragment key={index}>
            {content_type === ConstructorBlockType.HtmlMarkup && (
              <ConstructorContentSection
                variant="html-markup"
              >
                <HTMLMarkup
                  variant="centered"
                  markup={content_item.rich_text}
                  className={cx('html-markup-content')}
                />
              </ConstructorContentSection>
            )}
            {content_type === ConstructorBlockType.Images && content_item.items.length === 1 && (
              <ConstructorContentSection
                variant="image"
                title={content_item.title}
              >
                <img
                  src={content_item.items[0].image}
                  alt={content_item.items[0].title}
                />
              </ConstructorContentSection>
            )}
            {content_type === ConstructorBlockType.Images && content_item.items.length > 1 && variant === Variant.Default && (
              <ConstructorContentSection
                variant="image-carousel"
                title={content_item.title}
              >
                <ImageSlider>
                  {content_item.items.map(({ image, title }) => (
                    <Image
                      key={image}
                      src={image}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                    />
                  ))}
                </ImageSlider>
              </ConstructorContentSection>
            )}
            {content_type === ConstructorBlockType.Images && content_item.items.length > 1 && variant === Variant.Project && (
              <ConstructorContentSection
                variant="image-gallery"
                title={content_item.title}
              >
                <PhotoGallery
                  photos={content_item.items.map(({ image, title }) => ({
                    url: image,
                    description: title,
                  }))}
                />
              </ConstructorContentSection>
            )}
            {content_type === ConstructorBlockType.Plays && (
              <ConstructorContentSection
                variant="plays"
                title={content_item.title}
              >
                <BasicPlayCardList>
                  {content_item.items.map(({ id, name, city, year, authors, url_download, url_download_from }) => (
                    <PlayCard
                      key={id}
                      title={name}
                      city={city}
                      year={year?.toString()}
                      authors={authors.map((author) => ({
                        fullName: author.name,
                        slug: author.slug,
                      }))}
                      // TODO: непонятно, такое url_download, а что url_download_from. Оставлю пока наугад.
                      downloadUrl={url_download}
                      readingUrl={url_download_from}
                    />
                  ))}
                </BasicPlayCardList>
              </ConstructorContentSection>
            )}
            {content_type === ConstructorBlockType.Events && content_item.items.length === 1 && (
              <ConstructorContentSection
                variant="event"
                title={content_item.title}
              >
                <EventCard
                  date={format('d MMMM', new Date(content_item.items[0].date_time))}
                  time={format('H:mm', new Date(content_item.items[0].date_time))}
                  title={content_item.items[0].event_body.name}
                  team={content_item.items[0].event_body.team}
                  imageUrl={content_item.items[0].event_body.image}
                  projectTitle={content_item.items[0].event_body.project_title}
                  description={content_item.items[0].event_body.description}
                  {...content_item.items[0].type === 'PERFORMANCE' ? {
                    performanceUrl: `/performances/${content_item.items[0].event_body.id}`,
                  } : {}}
                  actionUrl={content_item.items[0].action_url}
                  actionText={content_item.items[0].action_text}
                />
              </ConstructorContentSection>
            )}
            {content_type === ConstructorBlockType.Events && content_item.items.length > 1 && (
              <ConstructorContentSection
                variant="events"
                title={content_item.title}
              >
                <EventList variant="compact">
                  {content_item.items.map(({
                    id,
                    type,
                    date_time,
                    event_body: {
                      id: performanceId,
                      name,
                      team,
                      image,
                      description,
                      project_title,
                    },
                    action_url,
                    action_text,
                  }) => (
                    <EventList.Item key={id}>
                      <EventCard
                        date={format('d MMMM', new Date(date_time))}
                        time={format('H:mm', new Date(date_time))}
                        title={name}
                        team={team}
                        imageUrl={image}
                        projectTitle={project_title}
                        description={description}
                        {...type === 'PERFORMANCE' ? {
                          performanceUrl: `/performances/${performanceId}`,
                        } : {}}
                        actionUrl={action_url}
                        actionText={action_text}
                      />
                    </EventList.Item>
                  ))}
                </EventList>
              </ConstructorContentSection>
            )}
            {content_type === ConstructorBlockType.Persons && (
              <ConstructorContentSection
                variant="persons"
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
              </ConstructorContentSection>
            )}
            {content_type === ConstructorBlockType.Videos && (
              <ConstructorContentSection
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
              </ConstructorContentSection>
            )}
            {content_type === ConstructorBlockType.Link && (
              <ConstructorContentSection
                variant="link"
                colors="brand"
                title={content_item.title}
              >
                <ConstructorLink
                  description={content_item.description}
                  // TODO: получить текст ссылки в ответе API
                  actionText="Перейти"
                  url={content_item.url}
                />
              </ConstructorContentSection>
            )}
          </Fragment>
        ))}
      </div>
    </ConstructorContentContextProvider>
  );
};
