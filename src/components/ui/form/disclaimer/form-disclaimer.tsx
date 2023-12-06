import classNames from 'classnames/bind';

import styles from './form-disclaimer.module.css';

interface FormDisclaimerProps {
  children: React.ReactNode
  className?: string
}

const cx = classNames.bind(styles);

export const FormDisclaimer = (props: FormDisclaimerProps) => {
  const { children, className } = props;

  return (
    <p className={cx('root', className)}>
      {children}
    </p>
  );
};
