import { FC } from 'react';
import cn from 'classnames';

import { Icon } from 'components/ui/icon';
import { InfoLink } from 'components/ui/info-link';

import styles from './request.module.css';

export const AuthorRequest: FC = () => {
  return (
    <section className={cn(styles.request)}>
      <div className={cn(styles.footnoteInfo)}>
        <Icon
          className={cn(styles.asterisk)}
          glyph='asterisk'
        />
        <p className={cn(styles.footnote)}>Это ваша страница? Если вы хотите внести изменения, пожалуйста, напишите
          нам на&nbsp;
        <InfoLink
          isOutsideLink={true}
          href='mailto://autors@lubimovka.ru'
          label='autors@lubimovka.ru'
          size='l'
          textDecoration='underline'
        />
        </p>
      </div>
    </section>
  );
};
