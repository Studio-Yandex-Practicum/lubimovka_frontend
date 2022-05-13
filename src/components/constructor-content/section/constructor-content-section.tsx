import classNames from 'classnames/bind';
import { useMemo } from 'react';

import { useConstructorContent } from '../constructor-content.context';

import type { FC } from 'react';

interface ConstructorContentSectionProps {
  type:  'plain-text' | 'html-markup' | 'plays' | 'persons' | 'images' | 'videos'
  title?: string
}

export const ConstructorContentSection: FC<ConstructorContentSectionProps> = (props) => {
  const {
    type,
    title,
    children,
  } = props;
  const { styles } = useConstructorContent();
  const cx = useMemo(() => classNames.bind(styles), [styles]);

  return (
    <section className={cx(type)}>
      {title && (
        <h2 className={cx('title')}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};
