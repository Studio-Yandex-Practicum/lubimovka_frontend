import classNames from 'classnames/bind';

import styles from './overlay-nav-actions.module.css';

const cx = classNames.bind(styles);

interface IOverlayNavActionsProps {
  children: React.ReactNode;
}

export const OverlayNavActions = (props: IOverlayNavActionsProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('actions')}>
      {children}
    </div>
  );
};
