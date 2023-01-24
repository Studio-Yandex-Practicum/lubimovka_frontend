import classNames from 'classnames/bind';

import styles from '../volunteer-list.module.css';

const cx = classNames.bind(styles);

export const VolunteerListItem: React.FC = (props) => {
  const {
    children,
  } = props;

  return (
    <li className={cx('item')}>
      {children}
    </li>
  );
};
