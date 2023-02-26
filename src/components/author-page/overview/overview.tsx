import cn from 'classnames/bind';
import { useMemo,useState } from 'react';

import { PlayCard } from 'components/play-card';
import { PlayList } from 'components/play-list';
import { Section } from 'components/section';
import { Button } from 'components/ui/button';
import { InfoLink } from 'components/ui/info-link';
import { Link } from 'components/ui/link';
import { Tag } from 'components/ui/tag';
import * as breakpoints from 'shared/breakpoints.js';
import { numberOfCharacters } from 'shared/constants/numbers';
import { useMediaQuery } from 'shared/hooks/use-media-query';

import type {
  OtherLink,
  Play,
  SocialNetwork,
  Achievement,
} from '__generated__/api-typings';

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
  const [isOpen, setIsOpen] = useState(false);

  const showEmail = () => setIsOpen(true);

  const isMobile = useMediaQuery(
    `(max-width: ${breakpoints['tablet-portrait']})`
  );

  const pinnedLinks = useMemo(
    () =>
      otherLinks.filter((item) => {
        return item.is_pinned;
      }),
    [otherLinks]
  );

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
            size="s"
            iconPlace="right"
            icon="arrow-left"
            label="Библиотека"
            border="bottomRight"
            isLink
            href="/library/authors"
          />
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
        {quote && (
          <div className={cx('quote')}>
            <p className={cx('quoteText')}>
              {`« ${quote.replace(/["']/g, '')} »`}
            </p>
          </div>
        )}
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
              <pre
                className={cx(
                  'description',
                  isExpand ? 'descriptionExpanded' : ''
                )}
              >
                {biography}
              </pre>
              {availableButton && (
                <Button
                  width="100%"
                  size="s"
                  iconPlace="right"
                  icon={isExpand ? 'arrow-down' : 'arrow-up'}
                  label={isExpand ? 'Полный текст' : 'Свернуть'}
                  border="topLeft"
                  onClick={() => setExpand(!isExpand)}
                />
              )}
            </div>
          )}
          {availablePins && (
            <div className={cx('authorLinks')}>
              {pinnedLinks.map((item, idx) => (
                <div className={cx('linkHeading')} key={idx}>
                  <InfoLink
                    label={item.name}
                    href={item.link}
                    icon="arrow-right"
                    iconPlace="right"
                    size="xl"
                    border="borderTop"
                    iconClassName={cx('link')}
                  />
                </div>
              ))}
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
                    <Link
                      href={`library/?festival=${item.year}&program=${item.id}`}
                    >
                      <a>
                        <Tag
                          label={`${item.name} ${item.year}`}
                          selected={false}
                        />
                      </a>
                    </Link>
                  </div>
                ))}
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
                    <InfoLink
                      key={idx}
                      href={item.link}
                      label={item.name}
                      isOutsideLink
                      icon="arrow-right"
                      iconPlace="left"
                      size="s"
                      border="borderBottomLeft"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {email && (
            <div className={cx('overviewSocialWrapper')}>
              <p className={cx('email')}>
                E-mail для связи
              </p>
              {!isOpen ? (
                <Button
                  onClick={showEmail}
                  type="button"
                  align="start"
                  label="Показать"
                  icon="arrow-right"
                  iconPlace="left"
                  size="s"
                  border="bottomLeft"
                />
              ) : (
                <InfoLink
                  isOutsideLink
                  href={`mailto:${email}`}
                  label={email}
                  size="l"
                  textDecoration="underline"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
