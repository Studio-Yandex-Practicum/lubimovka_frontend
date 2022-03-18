import { FC } from 'react';
import classNames from 'classnames/bind';

import { InfoLink } from 'components/ui/info-link';

import styles from './footer-copyright.module.css';

interface IFooterCopyright {
  className?: string,
}

const cx = classNames.bind(styles);

export const FooterCopyright: FC<IFooterCopyright> = (props) => {
  const { className } = props;
  const currentYear = new Date().getFullYear();

  return (
    <div className={cx(
      'footnote',
      className,
    )}
    >
      <div className={cx('copyright')}>
        &copy; Любимовка,
        {' '}
        {currentYear}
      </div>
      <InfoLink
        className={cx('footnoteLink')}
        isOutsideLink
        href="/privacy-policy"
        label="Политика конфиденциальности"
        hoverStyle="bottomLine"
        size="xs"
        textDecoration="textDecorationNone"
      />
      <dl className={cx('credits')}>
        <div className={cx('shishki')}>
          <dt className={cx('term')}>
            дизайн сайта
          </dt>
          <dd>
            <InfoLink
              isOutsideLink
              href="https://shishki.co"
              label="shishki.collective"
              hoverStyle="bottomLine"
              size="xs"
              textDecoration="textDecorationNone"
              className={cx('footnoteLink')}
            />
          </dd>
        </div>
        <div>
          <dt>
            вёрстка и разработка
          </dt>
          <dd>
            студенты&nbsp;
            <InfoLink
              isOutsideLink
              href="https://practicum.yandex.ru"
              label="Яндекс.Практикума"
              hoverStyle="bottomLine"
              size="xs"
              textDecoration="textDecorationNone"
              className={cx('footnoteLink')}
            />
          </dd>
        </div>
      </dl>
    </div>
  );
};
