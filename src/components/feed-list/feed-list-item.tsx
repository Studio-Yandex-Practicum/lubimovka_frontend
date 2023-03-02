import classNames from 'classnames/bind';

import styles from './feed-list.module.css';

const cx = classNames.bind(styles);

export const FeedListItem: React.FC = (props) => {
  const { children } = props;

  return (
    <li className={cx('item')}>
      {children}
    </li>
  );
};
