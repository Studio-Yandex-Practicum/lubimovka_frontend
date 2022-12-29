import classNames from 'classnames/bind';

import styles from './search-layout.module.css';

const cx = classNames.bind(styles);

export const SearchLayout: React.FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
