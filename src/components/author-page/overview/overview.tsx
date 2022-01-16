import { FC, useState } from 'react';
import cn from 'classnames';

import { Button } from 'components/ui/button';
import { Tag } from 'components/ui/tag';
import { InfoLink } from 'components/ui/info-link';

import styles from './overview.module.css';

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

  const toDrawButton = data.biography;

  const pinnedLinks = other_links.filter((item) => item.is_pinned);

  return (
    <section className={cn(styles.overview)}>
      <div className={cn(image ? styles.personalInfo : styles.personalInfoNoPhoto)}>
        <div className={cn(styles.button)}>
          <Button
            size="s"
            iconPlace="right"
            icon="arrow-left"
            label="Библиотека"
            border="bottomRight"
            isLink={true}/>
        </div>

        {image &&
          <div className={cn(styles.photoBox)}>
            <img
              className={cn(styles.photo)}
              src={image}
              alt={`Фотография автора ${ name }`}
            />
          </div>
        }
        <h1 className={cn(styles.fullName)}>{name}</h1>
        <p className={cn(styles.city)}>{city}</p>
        <q className={cn(styles.quote)}>
          <p className={cn(styles.quoteParagraph)}>{quote}</p>
        </q>
      </div>

      <div className={cn(styles.overviewInfo)}>
        <div className={cn(styles.overviewBlock)}>
          <p className={cn(styles.overviewParagraph, isExpand ? styles.expandButton : styles.rollUpButton)}>
            {biography}
          </p>
          {toDrawButton.length > 305 &&
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

          <div className={cn(styles.overviewBlockAuthorInfo)}>
            {pinnedLinks.length > 0  && other_links
              .sort((link1,link2) => link1.order_number - link2.order_number)
              .map((item, idx) =>
                <div className={cn(styles.overviewLinkHeading)} key={idx}>
                  <InfoLink
                    label={item.name}
                    href={item.link}
                    icon="arrow-right"
                    iconPlace="right"
                    size="xl"
                    border="borderTop"
                    iconClassName={cn(styles.link)}
                  />
                </div>
              )}
          </div>
        </div>

        <div className={cn(styles.overviewSet)}>
          <div className={cn(styles.overviewTagsBlock)}>
            <h2 className={cn(styles.overviewTagsHeading)}>Достижения</h2>
            <div className={cn(styles.tagWrapper)}>
              {achievements.map((item, idx) =>
                <div className={cn(styles.tag)} key={idx}>
                  <Tag
                    label={item}
                    selected={false}
                  />
                </div>
              )}
            </div>
          </div>

          <div className={cn(styles.overviewSocialWrapper)}>
            <h2 className={cn(styles.overviewSocialLinkHeading)}>Социальные сети</h2>
            <div className={cn(styles.overviewSocialLinkBlock)}>
              {social_networks.map((item, idx) =>
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
              )}
            </div>
          </div>

          <div className={cn(styles.overviewSocialWrapper)}>
            <p className={cn(styles.email)}>E-mail для связи</p>
            <InfoLink
              isOutsideLink={true}
              href={`mailto://${ email }`}
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
