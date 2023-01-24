import classNames from 'classnames/bind';

import style from './volunteer-list.module.css';

const cx = classNames.bind(style);

export const VolunteerList: React.FC = (props)=> {
  const {
    children,
  } = props;

  return (
    <ul className={cx('root')}>
      {children}
    </ul>
  );
};
