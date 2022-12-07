import classNames from 'classnames/bind';

import styles from './library-layout-pagination.module.css';

const cx = classNames.bind(styles);

export const LibraryLayoutPagination: React.FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
