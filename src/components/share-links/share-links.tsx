import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import { getShareUrls } from 'shared/constants/share-urls';
import { addBaseUrlToPath } from 'shared/helpers/url';

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
              size="s"
              border="bottom-left"
              target="_blank"
              icon={(
                <Icon
                  glyph="arrow-right"
                  width="100%"
                  height="100%"
                />
              )}
              href={url}
              animation='invert'
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
