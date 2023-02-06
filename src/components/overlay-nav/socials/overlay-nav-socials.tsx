import classNames from 'classnames/bind';

import styles from './overlay-nav-socials.module.css';

const cx = classNames.bind(styles);

interface IOverlayNavSocialsProps {
  children: React.ReactNode
}

export const OverlayNavSocials = (props: IOverlayNavSocialsProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('socials')}>
      {children}
    </div>
  );
};
