import classNames from 'classnames/bind';

import styles from './overlay-nav-logotype.module.css';

const cx = classNames.bind(styles);

interface IOverlayNavLogotypeProps {
  children: React.ReactNode;
}

export const OverlayNavLogotype = (props: IOverlayNavLogotypeProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('logotype')}>
      {children}
    </div>
  );
};
