import classNames from 'classnames/bind';

import { BlogLayoutCallToAction } from './call-to-action';
import { BlogLayoutDescription } from './description';
import { BlogLayoutFilter } from './filter';
import { BlogLayoutMain } from './main';
import { BlogLayoutTitle } from './title';

import type { ReactNode } from 'react';

import styles from './blog-layout.module.css';

interface BlogLayoutProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

const Component = (props: BlogLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};

Component.displayName = 'BlogLayout';

export const BlogLayout = Object.assign(Component, {
  Title: BlogLayoutTitle,
  Filter: BlogLayoutFilter,
  Main: BlogLayoutMain,
  Description: BlogLayoutDescription,
  CallToAction: BlogLayoutCallToAction,
});
