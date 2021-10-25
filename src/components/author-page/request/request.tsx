import { FC } from 'react';
import { Icon } from 'components/ui/icon';

import cn from 'classnames';
import styles from './request.module.css';

export const AuthorRequest: FC = () => {
  return (
    <section className={cn(styles.request)}>
      <div className={cn(styles.footnoteInfo)}>
        <Icon className={cn(styles.asterisk)} glyph='asterisk'/>
        <p className={cn(styles.footnote)}>Это ваша страница? Если вы хотите внести изменения, пожалуйста, напишите нам на&nbsp;
          <a href='#' className={cn(styles.footnoteAnchor)}>autors@lubimovka.ru</a>
        </p>
      </div>
    </section>
  );
};
