import classNames from 'classnames/bind';

import styles from './form-actions.module.css';
const cx = classNames.bind(styles);

interface IFormActionsProps {
  children: React.ReactNode;
}

const FormActions = (props: IFormActionsProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('actions')}>
      {children}
    </div>
  );
};

export default FormActions;
