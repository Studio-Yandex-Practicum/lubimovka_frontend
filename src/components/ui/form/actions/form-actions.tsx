import classNames from 'classnames/bind';

import styles from './form-actions.module.css';

interface FormActionsProps {
  children: React.ReactNode
  className?: string
}

const cx = classNames.bind(styles);

export const FormActions = (props: FormActionsProps) => {
  const { children, className } = props;

  return (
    <div className={cx('root', className)}>
      {children}
    </div>
  );
};
