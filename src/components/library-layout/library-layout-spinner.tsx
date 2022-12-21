import classNames from 'classnames/bind';

import { Spinner } from 'components/spinner';

import styles from './library-layout.module.css';

const cx = classNames.bind(styles);

export const LibraryLayoutSpinner: React.VFC = () => (
  <Spinner className={cx('spinner')}/>
);
