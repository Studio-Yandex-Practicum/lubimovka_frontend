import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';
import { addBaseUrlToPath } from 'shared/helpers/url';
import { getShareUrls } from 'shared/constants/share-urls';

import type { FC } from 'react';

import styles from './share-links.module.css';

interface ShareLinksProps {
  firstLine: string
  secondLine?: string
}

const cx = classNames.bind(styles);

export const ShareLinks: FC<ShareLinksProps> = (props) => {
  const { asPath } = useRouter();
  const url = addBaseUrlToPath(asPath);

  const {
    firstLine,
    secondLine,
  } = props;

  return (
    <p className={cx('root')}>
      <span>
        {firstLine}
        {' '}
        <span className={cx('links')}>
          {getShareUrls(url).map(({ text, url }) => (
            <Button
              key={url}
              className={cx('link')}
              size="xs"
              border="bottom-left"
              icon={(
                <Icon
                  glyph="arrow-right"
                  width="100%"
                  height="100%"
                />
              )}
              href={url}
            >
              {text}
            </Button>
          ))}
        </span>
      </span>
      {secondLine && (
        <span>
          {secondLine}
          {' '}
          в соцсетях
        </span>
      )}
    </p>
  );
};
