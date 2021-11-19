import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './project-page-section.module.css';
import { Button } from 'components/ui/button';
const cx = classNames.bind(styles);

interface IProjecPageSectionProps extends HTMLAttributes<HTMLElement> {
  type?:
    | 'video'
    | 'photo'
    | 'performances'
    | 'plays'
    | 'person'
    | 'cooperation'
    | 'through-block';
  title?: string;
  children?: ReactNode;
  description?: string;
  button?: boolean;
}

export const ProjecPageSection = (
  props: IProjecPageSectionProps
): JSX.Element => {
  const { type, title, children, description, button, ...restProps } = props;

  return (
    <section className={cx('section', type)} {...restProps}>
      {title && <h2 className={cx('title')}>{title}</h2>}
      {description && <p className={cx('desc')}>{description}</p>}
      {button && (
        <Button
          icon="arrow-right"
          label="YOUTUBE"
          iconPlace="right"
          size="l"
          isLink={true}
          border="full"
          align="space-between"
          className={cx('button')}
        ></Button>
      )}
      {children}
    </section>
  );
};
