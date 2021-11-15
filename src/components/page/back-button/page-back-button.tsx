import classNames from 'classnames/bind';

import styles from './page-back-button.module.css';
const cx = classNames.bind(styles);

interface IPageBackButtonProps {
  children: React.ReactNode;
}

export const PageBackButton = (props: IPageBackButtonProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('backButton')}>
      {children}
    </div>
  );
};
