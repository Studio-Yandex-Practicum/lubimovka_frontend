import { FC, useState, useMemo } from 'react';
import cn from 'classnames/bind';

import { Button } from 'components/ui/button';
import { Tag } from 'components/ui/tag';
import { InfoLink } from 'components/ui/info-link';
import { OtherLink , SocialNetwork } from 'api-typings';
import { numberOfCharacters } from 'shared/constants/numbers';

import styles from './overview.module.css';

const cx = cn.bind(styles);

interface IAuthorOverview {
  props: {
    image: string,
    name: string,
    city: string,
    quote: string,
    biography: string,
    other_links: OtherLink[],
    achievements: Array<string>,
    social_networks: SocialNetwork[],
    email: string,
  }
}

export const AuthorOverview: FC<IAuthorOverview> = ({ props }) => {
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
  } = props;

  const [isExpand, setExpand] = useState(true);

  const presenceOfButton = props.biography;

  const pinnedLinks = useMemo(() => otherLinks.filter((item) => {
    return item.is_pinned;
  }), [otherLinks]);

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
            isLink={true}
            href="/library/authors"
          />
        </div>

        {image &&
          <div className={cx('photoBox')}>
            <img
              className={cx('photo')}
              src={image}
              alt={`Фотография автора ${name}`}
            />
          </div>
        }
        <h1 className={cx('fullName')}>{name}</h1>
        <p className={cx('city')}>{city}</p>
        <div className={cx('quote')}>
          <p className={cx('quoteText')}>{quote}</p>
        </div>
      </div>

      <div className={cx('overviewInfo')}>
        <div className={cx('descriptionWrapper')}>
          <pre className={cx('description', isExpand ? 'descriptionExpanded' : '')}>
            {biography}
          </pre>
          {presenceOfButton.length > numberOfCharacters &&
            <Button
              width="100%"
              size="s"
              iconPlace="right"
              icon={isExpand ? 'arrow-down' : 'arrow-up'}
              label={isExpand ? 'Полный текст' : 'Свернуть'}
              border="topLeft"
              onClick={() => setExpand(!isExpand)}
            />
          }

          <div className={cx('authorLinks')}>
            {pinnedLinks.length > 0  && pinnedLinks
              .sort((link1,link2) => link1.order_number - link2.order_number)
              .map((item, idx) =>
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
              )}
          </div>
        </div>

        <div className={cx('overviewSet')}>
          <div className={cx('overviewTagsBlock')}>
            <h2 className={cx('overviewTagsHeading')}>Достижения</h2>
            <div className={cx('tagWrapper')}>
              {achievements.map((item, idx) =>
                <div className={cx('tag')} key={idx}>
                  <Tag
                    label={item}
                    selected={false}
                  />
                </div>
              )}
            </div>
          </div>

          <div className={cx('overviewSocialWrapper')}>
            <h2 className={cx('overviewSocialLinkHeading')}>Социальные сети</h2>
            <div className={cx('overviewSocialLinkBlock')}>
              {socialNetworks.map((item, idx) =>
                <div className={cx('overviewSocialLink')} key={idx}>
                  <InfoLink
                    key={idx}
                    href={item.link}
                    label={item.name}
                    isOutsideLink={true}
                    icon="arrow-right"
                    iconPlace="left"
                    size="s"
                    border="borderBottomLeft"
                  />
                </div>
              )}
            </div>
          </div>

          <div className={cx('overviewSocialWrapper')}>
            <p className={cx('email')}>E-mail для связи</p>
            <InfoLink
              isOutsideLink={true}
              href={`mailto:${email}`}
              label={email}
              size="l"
              textDecoration="underline"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
