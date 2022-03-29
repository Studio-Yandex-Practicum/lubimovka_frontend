import classNames from 'classnames/bind';

import { PressReleaseLayoutTitle } from './title';
import { PressReleaseLayoutContent } from './content';
import { PressReleaseLayoutCover } from './cover';

import type { FC } from 'react';

import styles from './press-release-layout.module.css';

const cx = classNames.bind(styles);

const Component: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};

Component.displayName = 'PressReleaseLayout';

export const PressReleaseLayout = Object.assign(Component, {
  Title: PressReleaseLayoutTitle,
  Cover: PressReleaseLayoutCover,
  Content: PressReleaseLayoutContent,
});

