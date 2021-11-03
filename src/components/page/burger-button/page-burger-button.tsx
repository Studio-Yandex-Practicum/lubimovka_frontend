import classNames from 'classnames/bind';

import styles from './page-burger-button.module.css';
const cx = classNames.bind(styles);

interface IPageBurgerButtonProps {
  children: React.ReactNode;
}

export const PageBurgerButton = (props: IPageBurgerButtonProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('burgerButton')}>
      {children}
    </div>
  );
};
