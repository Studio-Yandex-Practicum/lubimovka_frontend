import classNames from 'classnames/bind';

import styles from './multiple-select.module.css';

const cx = classNames.bind(styles);

export const MultipleSelectOption: React.FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('option')}>
      {children}
    </div>
  );
};
