import classNames from 'classnames/bind';

import styles from './section.module.css';

export interface SectionProps {
  type?:
  | 'plays'
  | 'persons'
  | 'partners'
  | 'play'
  | 'homepage-feed'
  | 'places'
  | 'homepage-shortlist'
  | 'homepage-teasers'
  | 'author-call-to-email'
  | 'blog-entries'
  | 'news'
  | 'author-plays'
  | 'volunteers'
  title?: string
  titleTag?: React.ElementType
  note?: React.ReactNode
  className?: string
}

const cx = classNames.bind(styles);

export const Section: React.FC<SectionProps> = (props) => {
  const {
    type,
    title,
    titleTag: TitleTag = 'h2',
    note,
    children,
    className,
    ...restProps
  } = props;

  return (
    <section
      className={cx(
        type,
        className
      )}
      {...restProps}
    >
      {title && (
        <TitleTag className={cx('title')}>
          {title}
        </TitleTag>
      )}
      {children}
      {note && (
        <div className={cx('note')}>
          {note}
        </div>
      )}
    </section>
  );
};
