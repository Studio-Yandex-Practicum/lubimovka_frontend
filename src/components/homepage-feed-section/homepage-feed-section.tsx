import classNames from 'classnames/bind';

import { Section } from 'components/section';

import type { FC, ReactNode } from 'react';

import styles from './homepage-feed-section.module.css';

interface HomepageFeedSectionProps {
  title: string,
  action: ReactNode,
}

const cx = classNames.bind(styles);

export const HomepageFeedSection: FC<HomepageFeedSectionProps> = (props) => {
  const {
    title,
    action,
    children,
  } = props;

  return (
    <Section
      title={title}
      type="homepage-feed"
    >
      <div className={cx('action')}>
        {action}
      </div>
      {children}
    </Section>
  );
};
