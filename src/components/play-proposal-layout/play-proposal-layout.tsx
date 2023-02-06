import classNames from 'classnames/bind';

import PlayProposalLayoutColumn from './column/play-proposal-layout-column';
import PlayProposalForm from './form/play-proposal-layout-form';
import PlayProposalLayoutImage from './image/play-proposal-layout-image';

import styles from './play-proposal-layout.module.css';

const cx = classNames.bind(styles);

interface IPlayProposalLayoutProps {
  children: React.ReactNode
}

const PlayProposalLayout = (props: IPlayProposalLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <main className={cx('layout')}>
      {children}
    </main>
  );
};

PlayProposalLayout.Image = PlayProposalLayoutImage;
PlayProposalLayout.Column = PlayProposalLayoutColumn;
PlayProposalLayout.Form = PlayProposalForm;

export default PlayProposalLayout;
