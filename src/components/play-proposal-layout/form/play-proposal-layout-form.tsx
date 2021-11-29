import classNames from 'classnames/bind';

import styles from './play-proposal-layout-form.module.css';

const cx = classNames.bind(styles);

interface IPlayProposalLayoutFormProps {
  children: React.ReactNode;
}

const PlayProposalLayoutForm = (props: IPlayProposalLayoutFormProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('form')}>
      {children}
    </div>
  );
};

export default PlayProposalLayoutForm;
