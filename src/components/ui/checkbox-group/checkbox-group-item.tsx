import classNames from 'classnames/bind';

import styles from './checkbox-group.module.css';

const cx = classNames.bind(styles);

export const CheckboxGroupItem: React.FC = (props) => {
  const { children } = props;

  return (
    <span className={cx('item')}>
      {children}
    </span>
  );
};
