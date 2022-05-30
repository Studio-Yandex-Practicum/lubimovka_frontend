//@ts-nocheck
import { Fragment, useMemo } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { PhotoGallery } from 'components/photo-gallery';
import { ImageSlider } from 'components/ui/image-slider';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { PerformanceSection } from 'components/performance-section';
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
import projectStyles from './variant/project.module.css';

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
  project: projectStyles,
};

export const ConstructorContent: FC<ConstructorContentProps> = (props) => {
  const {
    variant = Variant.Default,
    blocks,
  } = props;
  const cx = useMemo(() => classNames.bind(variants[variant]), [variant]);

  return (
    <ConstructorContentContextProvider
      value={{
        styles: variants[variant],
      }}
    >
      <div className={cx('root')}>
        {blocks.map(({ content_type, content_item }, index) => (
          <Fragment key={index}>
            {content_type === ConstructorBlockType.HtmlMarkup && (
              <ConstructorContentSection type="html-markup">
                <HTMLMarkup
                  markup={content_item.rich_text}
                  className={cx('html-markup-content')}
                />
              </ConstructorContentSection>
            )}
            {content_type === ConstructorBlockType.Images && (
              <ConstructorContentSection
                type={variant === Variant.Project ? 'photo-gallery' : 'photo-carousel'}
                title={content_item.title}
              >
                {variant === Variant.Project ? (
                  <PhotoGallery
                    photos={content_item.items.map(({ image, title }) => ({
                      url: image,
                      description: title,
                    }))}
                  />
                ) : (
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
                )}
              </ConstructorContentSection>
            )}
            {content_type === ConstructorBlockType.Plays && (
              <ConstructorContentSection
                type="plays"
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
              </ConstructorContentSection>
            )}
            {content_type === ConstructorBlockType.Events && (
              <PerformanceSection
                className={cx('events')}
                title={content_item.title}
              >
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
                  url,
                  paid
                }) => (
                  <EventCard
                    key={id}
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
                    actionUrl={url}
                    paid={paid}
                  />
                ))}
              </PerformanceSection>
            )}
            {content_type === ConstructorBlockType.Persons && (
              <ConstructorContentSection
                type="persons"
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
                type="videos"
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
                type="link"
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
