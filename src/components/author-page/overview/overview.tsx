import cn from 'classnames/bind';
import { useMemo,useState } from 'react';

import { AuthorEmail } from 'components/author-email';
import { PlayCard } from 'components/play-card';
import { PlayList } from 'components/play-list';
import { Section } from 'components/section';
import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import * as breakpoints from 'shared/breakpoints.js';
import { numberOfCharacters } from 'shared/constants/numbers';
import { useMediaQuery } from 'shared/hooks/use-media-query';

import type { Achievement,OtherLink, Play, SocialNetwork } from '__generated__/api-typings';

import styles from './overview.module.css';

const cx = cn.bind(styles);

interface IAuthorOverview {
  image: string
  name: string
  city: string
  quote: string
  biography: string
  other_links: OtherLink[]
  achievements: Array<Achievement>
  social_networks: SocialNetwork[]
  email: string
  plays: Play[]
}

export const AuthorOverview: React.FC<IAuthorOverview> = (props) => {
  const {
    image,
    name,
    city,
    quote,
    biography,
    other_links: otherLinks,
    social_networks: socialNetworks,
    achievements,
    email,
    plays,
  } = props;

  const [isExpand, setExpand] = useState(true);

  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);

  const pinnedLinks = useMemo(() => otherLinks.filter((item) => {
    return item.is_pinned;
  }), [otherLinks]);

  const availablePins = pinnedLinks.length > 0;
  const availableButton = biography.length > numberOfCharacters;
  const availablePlays = isMobile && plays.length > 0;
  const availableTags = achievements.length > 0;
  const availableSocialNetworks = socialNetworks.length > 0;

  return (
    <section className={cx('overview')}>
      <div className={cx(image ? 'personalInfo' : 'personalInfoNoPhoto')}>
        <div className={cx('button')}>
          <Button
            size='s'
            border='right-bottom'
            href={'/library/authors'}
            icon={(
              <Icon
                glyph="arrow-left"
                width="100%"
                height="100%"
              />
            )}
            iconPosition='right'
            upperCase
          >
            {'Библиотека'}
          </Button>
        </div>
        {image && (
          <div className={cx('photoBox')}>
            <img
              className={cx('photo')}
              src={image}
              alt={`Фотография автора ${name}`}
            />
          </div>
        )}
        <h1 className={cx('fullName')}>
          {name}
        </h1>
        <p className={cx('city')}>
          {city}
        </p>
        {quote
          && (
            <div className={cx('quote')}>
              <p className={cx('quoteText')}>
                {quote}
              </p>
            </div>
          )
        }
      </div>
      <div className={cx('overviewInfo')}>
        <div className={cx('descriptionWrapper')}>
          {availablePlays && (
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
          {biography && (
            <div className={cx('descriptionSet')}>
              <pre className={cx('description', isExpand ? 'descriptionExpanded' : '')}>
                {biography}
              </pre>
              {availableButton
              && (
                <Button
                  fullWidth
                  size='s'
                  border='top-left'
                  type='button'
                  onClick={() => setExpand(!isExpand)}
                  icon={(
                    <Icon
                      glyph={isExpand ? 'arrow-down' : 'arrow-up'}
                      width="100%"
                      height="100%"
                    />
                  )}
                  iconPosition='right'
                  className={cx('buttonToggle')}
                  upperCase
                  animation='invert'
                >
                  {isExpand ? 'Полный текст' : 'Свернуть'}
                </Button>
              )
              }
            </div>
          )}
          {availablePins && (
            <div className={cx('authorLinks')}>
              {pinnedLinks
                .map((item, idx) => (
                  <div className={cx('linkHeading')} key={idx}>
                    <Button
                      fullWidth
                      size='m'
                      border='top'
                      href={item.link}
                      icon={(
                        <Icon
                          glyph='arrow-right'
                          width="100%"
                          height="100%"
                        />
                      )}
                      iconPosition='right'
                      animation='invert'
                    >
                      {item.name}
                    </Button>
                  </div>
                )
                )}
            </div>
          )}
        </div>
        <div className={cx('overviewSet')}>
          {availableTags && (
            <div className={cx('overviewTagsBlock')}>
              <h2 className={cx('overviewTagsHeading')}>
                Достижения
              </h2>
              <div className={cx('tagWrapper')}>
                {achievements.map((item, idx) => (
                  <div className={cx('tag')} key={idx}>
                    <Button
                      size='sm'
                      border='right-bottom-left'
                      href={`library/?festival=${item.year}&program=${item.id}`}
                      animation='invert'
                    >
                      {`${item.name} ${item.year}`}
                    </Button>
                  </div>
                )
                )}
              </div>
            </div>
          )}
          {availableSocialNetworks && (
            <div className={cx('overviewSocialWrapper')}>
              <h2 className={cx('overviewSocialLinkHeading')}>
                Социальные сети
              </h2>
              <div className={cx('overviewSocialLinkBlock')}>
                {socialNetworks.map((item, idx) => (
                  <div className={cx('overviewSocialLink')} key={idx}>
                    <Button
                      key={idx}
                      size="s"
                      border='bottom-left'
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      icon={(
                        <Icon
                          glyph="arrow-right"
                          width="100%"
                          height="100%"
                        />
                      )}
                      iconPosition="left"
                      animation='invert'
                      className={cx('overviewSocialLinkButton')}
                    >
                      {item.name}
                    </Button>
                  </div>
                )
                )}
              </div>
            </div>
          )}
          {email && (
            <div className={cx('overviewSocialWrapper')}>
              <AuthorEmail email={email}/>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
