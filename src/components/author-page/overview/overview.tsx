import { FC, useState } from 'react';
import cn from 'classnames';

import { Button } from 'components/ui/button';
import { Tag } from 'components/ui/tag';
import { InfoLink } from 'components/ui/info-link';

import styles from './overview.module.css';

interface dataList {
  id: string;
  paragraph: string;
}

interface IAuthorOverview {
  data: {
    photo: string,
    name: string,
    city: string,
    quote: string,
    description: string,
    dataList: {
      title: string;
      list: dataList[];
    }
  }
}

export const AuthorOverview: FC<IAuthorOverview> = ({ data }) => {

  const {
    photo
  } = data;

  const [isExpand, setExpand] = useState(true);

  return (
    <section className={cn(styles.overview)}>
      <div className={cn(photo ? styles.personalInfo : styles.personalInfoNoPhoto)}>
        <div className={cn(styles.button)}>
          <Button size='s' iconPlace='right' icon='arrow-left' label='Библиотека' border='bottomRight' isLink={true}/>
        </div>

        {photo &&
        <div className={cn(styles.photoBox)}>
          <img className={cn(styles.photo)} src={data.photo} alt={`Фотография автора ${data.name}`}/>
        </div>
        }
        <h1 className={cn(styles.fullName)}>{data.name}</h1>
        <p className={cn(styles.city)}>{data.city}</p>
        <q className={cn(styles.quote)}>
          <p className={cn(styles.quoteParagraph)}>{data.quote}</p>
        </q>
      </div>

      <div className={cn(styles.overviewInfo)}>
        <div className={cn(styles.overviewBlock)}>
          <p className={cn(styles.overviewParagraph, isExpand ? styles.expandButton : styles.rollUpButton)}>{data.description}</p>
          <Button
            width='100%'
            size='s'
            iconPlace='right'
            icon={isExpand ? 'arrow-down' : 'arrow-up'}
            label={isExpand ? 'Полный текст' : 'Свернуть'}
            border='topLeft'
            onClick={() => setExpand(!isExpand)}
          />
          <div className={cn(styles.overviewBlockAuthorInfo)}>
            {data.dataList.list.map((item) =>
              <div className={cn(styles.overviewLinkHeading)} key={item.id}>
                <InfoLink
                  label={item.paragraph}
                  icon='arrow-right'
                  iconPlace='right'
                  size='xl'
                  border='borderTop'
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
              <div className={cn(styles.tag)}>
                <Tag label='шорт-лист' selected={false}/>
              </div>
              <div className={cn(styles.tag)}>
                <Tag label='внеконкурсная программа' selected={false}/>
              </div>
              <div className={cn(styles.tag)}>
                <Tag label='fringe-программа' selected={false}/>
              </div>
            </div>
          </div>

          <div className={cn(styles.overviewSocialWrapper)}>
            <h2 className={cn(styles.overviewSocialLinkHeading)}>Социальные сети</h2>
            <div className={cn(styles.overviewSocialLinkBlock)}>
              <InfoLink
                isOutsideLink={true}
                href='https://www.facebook.com/festival.lubimovka'
                label='fb'
                icon='arrow-right'
                iconPlace='left'
                size='s'
                border='borderBottomLeft'
              />
              <InfoLink
                isOutsideLink={true}
                href='https://www.facebook.com/festival.lubimovka'
                label='vk'
                icon='arrow-right'
                iconPlace='left'
                size='s'
                border='borderBottomLeft'
              />
            </div>
          </div>

          <div className={cn(styles.overviewSocialWrapper)}>
            <p className={cn(styles.email)}>E-mail для связи</p>
            <InfoLink
              isOutsideLink={true}
              href='mailto://more@lubimovka.ru'
              label='avgustyniak@gmail.com'
              size='l'
              textDecoration='underline'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
