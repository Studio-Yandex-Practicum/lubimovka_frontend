import classNames from 'classnames/bind';

import styles from './button-group.module.css';

const cx = classNames.bind(styles);

export const ButtonGroup: React.FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
