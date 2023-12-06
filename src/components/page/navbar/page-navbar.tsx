import classNames from 'classnames/bind';

import styles from './page-navbar.module.css';

interface PageNavbarProps {
  custom?: boolean
}

const cx = classNames.bind(styles);

export const PageNavbar: React.FC<PageNavbarProps> = (props) => {
  const {
    custom,
    children,
  } = props;

  return (
    <header
      {...!custom && {
        className: cx('root')
      }}
    >
      {children}
    </header>
  );
};
