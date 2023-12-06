import classNames from 'classnames/bind';

import styles from './feed-list.module.css';

interface FeedListProps {
  variant: 'blog' | 'news'
  className?: string
}

const cx = classNames.bind(styles);

export const FeedList: React.FC<FeedListProps> = (props) => {
  const {
    variant,
    className,
    children,
  } = props;

  return (
    <ul className={cx(variant, className)}>
      {children}
    </ul>
  );
};
