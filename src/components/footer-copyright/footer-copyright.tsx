import classNames from 'classnames/bind';

import { InfoLink } from 'components/ui/info-link';

import type { FC } from 'react';

import styles from './footer-copyright.module.css';

interface FooterCopyright {
  className?: string
  privacyPolicyUrl?: string
}

const cx = classNames.bind(styles);

export const FooterCopyright: FC<FooterCopyright> = (props) => {
  const {
    className,
    privacyPolicyUrl,
  } = props;
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
      {privacyPolicyUrl && (
        <InfoLink
          className={cx('footnoteLink')}
          isOutsideLink
          href={privacyPolicyUrl}
          label="Политика конфиденциальности"
          hoverStyle="bottomLine"
          size="xs"
          textDecoration="textDecorationNone"
        />
      )}
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
            студенты
            {' '}
            <InfoLink
              isOutsideLink
              href="https://practicum.yandex.ru"
              label="Яндекс Практикума"
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
