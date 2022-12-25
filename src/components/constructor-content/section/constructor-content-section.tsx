import classNames from 'classnames/bind';
import { useMemo } from 'react';

import { useConstructorContent } from '../constructor-content.context';

import type { FC } from 'react';

interface ConstructorContentSectionProps {
  variant: 'default' | 'events' | 'event' | 'link' | 'html-markup' | 'image-carousel' | 'image-gallery' |  'image' | 'plays' | 'persons'
  title?: string
}

export const ConstructorContentSection: FC<ConstructorContentSectionProps> = (props) => {
  const {
    variant = 'default',
    title,
    children,
  } = props;
  const { styles } = useConstructorContent();
  const cx = useMemo(() => classNames.bind(styles), [styles]);

  return (
    <section className={cx(variant)}>
      <div className={cx('inner')}>
        {title && (
          <h2 className={cx('title')}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
