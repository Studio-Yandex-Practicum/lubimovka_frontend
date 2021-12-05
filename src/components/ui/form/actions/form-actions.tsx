import classNames from 'classnames/bind';

import styles from './form-actions.module.css';

interface IFormActionsProps {
  children: React.ReactNode;
  className?: string;
}

const cx = classNames.bind(styles);

export const FormActions = (props: IFormActionsProps): JSX.Element => {
  const { children, className } = props;

  return (
    <div className={cx('actions', className)}>
      {children}
    </div>
  );
};
