import { FC, useState } from 'react';
import cn from 'classnames/bind';

import { Button } from 'components/ui/button';
import { Tag } from 'components/ui/tag';
import { InfoLink } from 'components/ui/info-link';

import styles from './overview.module.css';

const cx = cn.bind(styles);

interface otherLinks {
  name: string,
  link: string,
  is_pinned: boolean,
  order_number: number,
}

interface socialDataList {
  name: string,
  link: string,
}

interface IAuthorOverview {
  data: {
    image: string,
    name: string,
    city: string,
    quote: string,
    biography: string,
    other_links: otherLinks[],
    achievements: Array<string>,
    social_networks: socialDataList[],
    email: string,
  }
}

export const AuthorOverview: FC<IAuthorOverview> = ({ data }) => {
  const {
    image,
    name,
    city,
    quote,
    biography,
    other_links,
    achievements,
    social_networks,
    email,
  } = data;

  const [isExpand, setExpand] = useState(true);

  return (
    <section className={cx('overview')}>
      <div className={cx(image ? 'personalInfo' : 'personalInfoNoPhoto')}>
        <div className={cx('button')}>
          <Button
            href='/library/authors'
            size='s'
            iconPlace='right'
            icon='arrow-left'
            label='Библиотека'
            border='bottomRight'
            isLink={true}
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
        <q className={cx('quote')}>
          <p className={cx('quoteParagraph')}>{quote}</p>
        </q>
      </div>

      <div className={cx('overviewInfo')}>
        <div className={cx('overviewBlock')}>
          <p className={cx('overviewParagraph', isExpand ? styles.expandButton : styles.rollUpButton)}>
            {biography}
          </p>
          <Button
            width='100%'
            size='s'
            iconPlace='right'
            icon={isExpand ? 'arrow-down' : 'arrow-up'}
            label={isExpand ? 'Полный текст' : 'Свернуть'}
            border='topLeft'
            onClick={() => setExpand(!isExpand)}
          />

          <div className={cx('overviewBlockAuthorInfo')}>
            {other_links.map((item, idx) =>
              <div className={cx('overviewLinkHeading')} key={idx}>
                <InfoLink
                  label={item.name}
                  href={item.link}
                  icon='arrow-right'
                  iconPlace='right'
                  size='xl'
                  border='borderTop'
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
              {social_networks.map((item, idx) =>
                <InfoLink
                  key={idx}
                  href={item.link}
                  label={item.name}
                  isOutsideLink={true}
                  icon='arrow-right'
                  iconPlace='left'
                  size='s'
                  border='borderBottomLeft'
                />
              )}
            </div>
          </div>

          <div className={cx('overviewSocialWrapper')}>
            <p className={cx('email')}>E-mail для связи</p>
            <InfoLink
              isOutsideLink={true}
              href={`mailto://${email}`}
              label={email}
              size='l'
              textDecoration='underline'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
