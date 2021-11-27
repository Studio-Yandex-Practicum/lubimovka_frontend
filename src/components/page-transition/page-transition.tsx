import classNames from 'classnames/bind';

import styles from './page-transition.module.css';

const cx = classNames.bind(styles);

interface IPageTransitionProps {
  children: React.ReactNode;
  type: string;
}

export const PageTransition = (props: IPageTransitionProps): JSX.Element => {
  const { children, type } = props;

  return (
    <div className={cx('container', type)}>
      {children}
    </div>
  );
};
