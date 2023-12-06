import classNames from 'classnames/bind';

import styles from './multiple-select.module.css';

const cx = classNames.bind(styles);

export const MultipleSelectOptionText: React.FC = (props) => {
  const { children } = props;

  return (
    <span className={cx('option-text')}>
      {children}
    </span>
  );
};

