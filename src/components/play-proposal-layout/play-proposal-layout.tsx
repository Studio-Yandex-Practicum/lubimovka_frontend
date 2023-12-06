import classNames from 'classnames/bind';

import styles from './play-proposal-layout.module.css';

const cx = classNames.bind(styles);

export const PlayProposalLayout: React.FC = (props) => {
  const { children } = props;

  return (
    <main className={cx('layout')}>
      {children}
    </main>
  );
};
