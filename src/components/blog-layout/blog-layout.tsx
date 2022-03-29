import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { BlogLayoutTitle } from './title';
import { BlogLayoutFilter } from './filter';
import { BlogLayoutMain } from './main';
import { BlogLayoutDescription } from './description';
import { BlogLayoutCallToAction } from './call-to-action';

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
