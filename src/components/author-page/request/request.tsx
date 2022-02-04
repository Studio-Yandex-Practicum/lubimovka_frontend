import { FC } from 'react';
import cn from 'classnames/bind';

import { Icon } from 'components/ui/icon';
import { InfoLink } from 'components/ui/info-link';

import styles from './request.module.css';

const cx = cn.bind(styles);

export const AuthorRequest: FC = () => {
  return (
    <section className={cx('request')}>
      <div className={cx('footnoteInfo')}>
        <Icon
          className={cx('asterisk')}
          glyph="asterisk"
        />
        <p className={cx('footnote')}>Это ваша страница? Если вы хотите внести изменения, пожалуйста, напишите
          нам на&nbsp;
        <InfoLink
          isOutsideLink={true}
          href="mailto:autors@lubimovka.ru"
          label="autors@lubimovka.ru"
          size="l"
          textDecoration="underline"
        />
        </p>
      </div>
    </section>
  );
};
