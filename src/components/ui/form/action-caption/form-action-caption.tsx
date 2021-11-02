import classNames from 'classnames/bind';

import styles from './form-action-caption.module.css';
const cx = classNames.bind(styles);

interface IFormActionCaptionProps {
  view: 'shift' | 'below';
  children: React.ReactNode;
}

const FormActionCaption = (props: IFormActionCaptionProps): JSX.Element => {
  const { view, children } = props;

  return (
    <div className={cx('actionCaption', [view])}>
      {children}
    </div>
  );
};

export default FormActionCaption;
