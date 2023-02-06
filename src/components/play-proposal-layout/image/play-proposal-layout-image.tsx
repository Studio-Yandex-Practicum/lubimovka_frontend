import classNames from 'classnames/bind';

import styles from './play-proposal-layout-image.module.css';

const cx = classNames.bind(styles);

interface IPlayProposalLayoutImageProps {
  children: React.ReactNode
}

const PlayProposalLayoutImage = (props: IPlayProposalLayoutImageProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('image')}>
      {children}
    </div>
  );
};

export default PlayProposalLayoutImage;
