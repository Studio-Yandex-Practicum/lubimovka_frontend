// @ts-nocheck TODO:
import classNames from 'classnames/bind';
import format from 'date-fns/format';
import Image from 'next/image';
import { Fragment } from 'react';

import { ConstructorLink } from 'components/constructor-link';
import { EventCard } from 'components/event-card';
import { EventList } from 'components/event-list';
import { HTMLMarkup } from 'components/html-markup';
import { ImageGallery } from 'components/image-gallery';
import { PersonCardList } from 'components/person-card-list';
import { PlayCard } from 'components/play-card';
import { PlayList } from 'components/play-list';
import { ImageSlider } from 'components/ui/image-slider';
import { PersonCard } from 'components/ui/person-card';
import { Video } from 'components/video';
import { VideoList } from 'components/video-list';

import { ConstructorBlockType } from './constructor-content.const';
import { ConstructorContentContextProvider } from './constructor-content.context';
import { ConstructorContentSection } from './section';

import type { ConstructorBlock } from './constructor-content.types';

import defaultStyles from './variant/default.module.css';

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

export const ConstructorContent: React.FC<ConstructorContentProps> = (props) => {
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
                <ImageGallery
                  items={content_item.items.map(({ image, title }) => ({
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
                <PlayList variant="scrollable">
                  {content_item.items.map(({ id, name, city, year, authors, url_download, url_reading }) => (
                    <PlayList.Item key={id}>
                      <PlayCard
                        title={name}
                        city={city}
                        year={year?.toString()}
                        authors={authors.map((author) => ({
                          fullName: author.name,
                          slug: author.slug,
                        }))}
                        // TODO: непонятно, такое url_download, а что url_download_from. Оставлю пока наугад.
                        downloadUrl={url_download}
                        readingUrl={url_reading}
                      />
                    </PlayList.Item>
                  ))}
                </PlayList>
              </ConstructorContentSection>
            )}
            {content_type === ConstructorBlockType.Events && content_item.items.length === 1 && (
              <ConstructorContentSection
                variant="event"
                title={content_item.title}
              >
                <EventCard
                  {...content_item.items[0].date_time && {
                    date: format(new Date(content_item.items[0].date_time), 'd MMMM'),
                    time: format(new Date(content_item.items[0].date_time), 'H:mm'),
                  }}
                  title={content_item.items[0].title}
                  type={content_item.items[0].type}
                  team={content_item.items[0].team}
                  imageUrl={content_item.items[0].image}
                  description={content_item.items[0].description}
                  {...content_item.items[0].performance_id ? {
                    aboutUrl: `/performances/${content_item.items[0].performance_id}`,
                    aboutText: 'О спектакле',
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
                    performance_id,
                    title,
                    team,
                    image,
                    description,
                    action_url,
                    action_text,
                  }) => (
                    <EventList.Item key={id}>
                      <EventCard
                        {...date_time && {
                          date: format(new Date(date_time), 'd MMMM'),
                          time: format(new Date(date_time), 'H:mm'),
                        }}
                        title={title}
                        type={type}
                        team={team}
                        imageUrl={image}
                        description={description}
                        {...performance_id ? {
                          aboutUrl: `/performances/${performance_id}`,
                          aboutText: 'О спектакле',
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
                variant="default"
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
