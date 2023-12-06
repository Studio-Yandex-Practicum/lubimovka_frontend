import classNames from 'classnames/bind';

import styles from './authors-layout-heading.module.css';

const cx = classNames.bind(styles);

export const AuthorsLayoutHeading: React.FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      <div className={cx('inner')}>
        {children}
      </div>
    </div>
  );
};
