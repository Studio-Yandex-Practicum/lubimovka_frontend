import classNames from 'classnames/bind';

import styles from './form-action.module.css';
const cx = classNames.bind(styles);

interface IFormActionProps {
  children: React.ReactNode;
}

const FormAction = (props: IFormActionProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('action')}>
      {children}
    </div>
  );
};

export default FormAction;
