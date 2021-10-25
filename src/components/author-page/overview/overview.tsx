import { FC } from 'react';
import { Button } from 'components/ui/button';
import { Tag } from 'components/ui/tag';

import cn from 'classnames';
import styles from './overview.module.css';

export const AuthorOverview: FC = () => {
  return (
    /* TODO: Секцию следует разбить на более мелкие компоненты */
    <section className={cn(styles.overview)}>
      <div className={cn(styles.personalInfo)}>
        <div className={cn(styles.button)}>
          <Button size='s' iconPlace='right' icon='arrow-left' label='Библиотека' border='bottomRight' isLink={true}/>
        </div>
        <div className={cn(styles.photo)}>Author Image</div>
        <div className={cn(styles.info)}>
          <h1 className={cn(styles.fullName)}>Екатерина Августеняк</h1>
          <p className={cn(styles.city)}>Санкт-Петербург</p>
          <q className={cn(styles.quote)}>
            <p className={cn(styles.quoteParagraph)}> У меня не было задачи написать какой-то комический текст,
              мне было интересно сделать именно пьесу-каталог. </p>
          </q>
        </div>
      </div>

      <div className={cn(styles.overviewInfo)}>
        <div className={cn(styles.overviewBlock)}>
          <p className={cn(styles.overviewParagraph)}>Художница, драматург, режиссёр. Занимается исследованием
            перформативных возможностей языка и художественным анализом когнитивных особенностей участников
            современных коммуникаций. Создает тексты для театра, применяет драматургические практики в разных
            медиумах.</p>
        </div>

        <div className={cn(styles.overviewSet)}>
          <div className={cn(styles.overviewTagsBlock)}>
            <h2 className={cn(styles.overviewTagsHeading)}>Достижения</h2>
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

          <div>
            <h2 className={cn(styles.overviewTagsHeading)}>Социальные сети</h2>
            {/* TODO: Переделать по-нормальному */}
            <Button size='s' iconPlace='left' icon='arrow-right' label='fb' border='bottomLeft'/>
            <Button size='s' iconPlace='left' icon='arrow-right' label='vk' border='bottomLeft'/>
          </div>

          <div>
            <p className={cn(styles.email)}>E-mail для связи</p>
            <a className={cn(styles.email)} href='#'>e-mail@e.mail</a>
          </div>
        </div>
      </div>
    </section>
  );
};
