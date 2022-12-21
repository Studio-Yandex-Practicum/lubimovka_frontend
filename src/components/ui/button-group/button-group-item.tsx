import classNames from 'classnames/bind';

import styles from './button-group.module.css';

const cx = classNames.bind(styles);

export const ButtonGroupItem: React.FC = (props) => {
  const { children } = props;

  return (
    <span className={cx('item')}>
      {children}
    </span>
  );
};
