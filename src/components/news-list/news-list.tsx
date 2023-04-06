import classNames from 'classnames/bind';

import { NewsListItem } from './item';

import styles from './news-list.module.css';

interface NewsListProps {
  className?: string
}

const cx = classNames.bind(styles);

const Component: React.FC<NewsListProps> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <ul className={cx('root', className)}>
      {children}
    </ul>
  );
};

export const NewsList = Object.assign(Component, {
  Item: NewsListItem,
});
