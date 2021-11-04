import classNames from 'classnames/bind';

import styles from './play-proposal-layout-column.module.css';
const cx = classNames.bind(styles);

interface IPlayProposalLayoutColumnProps {
  children: React.ReactNode;
}

const PlayProposalLayoutColumn = (props: IPlayProposalLayoutColumnProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('column')}>
      {children}
    </div>
  );
};

export default PlayProposalLayoutColumn;
