import classNames from 'classnames/bind';

import styles from './play-proposal-title.module.css';

const cx = classNames.bind(styles);

const PlayProposalTitle = (): JSX.Element => {
  return (
    <h1 className={cx('title')}>
      Подать пьесу
    </h1>
  );
};

export default PlayProposalTitle;
