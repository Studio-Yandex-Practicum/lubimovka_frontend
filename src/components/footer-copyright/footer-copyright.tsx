import classNames from 'classnames/bind';

import { Button } from 'components/ui/button2';

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
        <Button
          border="none"
          size="xs"
          className={cx('footnoteLink')}
          animation='bottomLine'
          href={privacyPolicyUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          {'Политика конфиденциальности'}
        </Button>
      )}
      <dl className={cx('credits')}>
        <div className={cx('shishki')}>
          <dt className={cx('term')}>
            дизайн сайта
          </dt>
          <dd>
            <Button
              border="none"
              size="xs"
              className={cx('footnoteLink')}
              animation='bottomLine'
              href="https://shishki.co"
              target='_blank'
              rel='noopener noreferrer'
            >
              {'shishki.collective'}
            </Button>
          </dd>
        </div>
        <div>
          <dt>
            вёрстка и разработка
          </dt>
          <dd>
            студенты
            {' '}
            <Button
              border="none"
              size="xs"
              className={cx('footnoteLink')}
              animation='bottomLine'
              href="https://practicum.yandex.ru"
              target='_blank'
              rel='noopener noreferrer'
            >
              {'Яндекс Практикума'}
            </Button>
          </dd>
        </div>
      </dl>
    </div>
  );
};
