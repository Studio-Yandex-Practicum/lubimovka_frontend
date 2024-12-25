// @ts-nocheck TODO:
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useCallback } from 'react';

import { ConstructorLink } from 'components/constructor-link';
import { EmbedCode } from 'components/embed-code';
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
import { prepareEventDateTime } from './constructor-content.utils';
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

  const renderImageBlock = useCallback(({ content_item }, key) => {
    if (content_item.items.length === 0) {
      return null;
    }

    if (content_item.items.length === 1) {
      const {
        image,
        title
      } = content_item.items[0];

      return (
        <ConstructorContentSection
          key={key}
          variant="image"
          title={content_item.title}
        >
          <img
            src={image}
            alt={title}
          />
        </ConstructorContentSection>
      );
    }

    if (variant === Variant.Default) {
      return (
        <ConstructorContentSection
          key={key}
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
      );
    }

    if (variant === Variant.Project) {
      return (
        <ConstructorContentSection
          key={key}
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
      );
    }

    return null;
  }, []);

  const renderEventsBlock = useCallback(({ content_item }, key) => {
    if (content_item.items.length === 1) {
      const [event] = content_item.items;

      return (
        <ConstructorContentSection
          key={key}
          variant="event"
          title={content_item.title}
        >
          <EventCard
            {...event.date_time && prepareEventDateTime(event.date_time)}
            title={event.title}
            type={event.type}
            team={event.team}
            imageUrl={event.image}
            description={event.description}
            {...event.performance_id ? {
              aboutUrl: `/performances/${event.performance_id}`,
              aboutText: 'О спектакле',
            } : {}}
            actionUrl={event.action_url}
            actionText={event.action_text}
          />
        </ConstructorContentSection>
      );
    }

    if (content_item.items.length > 1) {
      return (
        <ConstructorContentSection
          key={key}
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
                  {...date_time && prepareEventDateTime(date_time)}
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
      );
    }

    return null;
  }, []);

  const renderBlock = useCallback((block, key) => {
    const {
      content_type,
      content_item,
    } = block;

    switch (content_type) {
    case ConstructorBlockType.HtmlMarkup:
      return (
        <ConstructorContentSection
          key={key}
          variant="html-markup"
        >
          <HTMLMarkup
            variant="centered"
            markup={content_item.rich_text}
            className={cx('html-markup-content')}
          />
        </ConstructorContentSection>
      );
    case ConstructorBlockType.Images:
      return renderImageBlock(block, key);
    case ConstructorBlockType.Plays:
      return (
        <ConstructorContentSection
          key={key}
          variant="plays"
          title={content_item.title}
        >
          <PlayList variant="scrollable">
            {content_item.items.map(({
              id,
              name,
              city,
              year,
              authors,
              url_download,
              url_reading
            }) => (
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
      );
    case ConstructorBlockType.Events:
      return renderEventsBlock(block, key);
    case ConstructorBlockType.Persons:
      return (
        <ConstructorContentSection
          key={key}
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
                about={roles.map(({ name }) => name).join(', ')}
              />
            ))}
          </PersonCardList>
        </ConstructorContentSection>
      );
    case ConstructorBlockType.Videos:
      return (
        <ConstructorContentSection
          key={key}
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
      );
    case ConstructorBlockType.Link:
      return (
        <ConstructorContentSection
          key={key}
          variant="link"
          title={content_item.title}
        >
          <ConstructorLink
            description={content_item.description}
            // TODO: получить текст ссылки в ответе API
            actionText={content_item.title}
            url={content_item.url}
          />
        </ConstructorContentSection>
      );
    case ConstructorBlockType.EmbedCode:
      return (
        <ConstructorContentSection
          key={key}
          variant="embed-code"
          title={content_item.title}
        >
          <EmbedCode
            html={content_item.code}
          />
        </ConstructorContentSection>
      );
    default:
      return null;
    }
  }, []);

  return (
    <ConstructorContentContextProvider
      value={{
        styles: variants.default,
      }}
    >
      <div className={cx('root')}>
        {blocks.map(renderBlock)}
      </div>
    </ConstructorContentContextProvider>
  );
};
