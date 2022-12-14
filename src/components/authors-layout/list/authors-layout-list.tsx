import classNames from 'classnames/bind';

import { Spinner } from 'components/spinner';

import styles from './authors-layout-list.module.css';

const cx = classNames.bind(styles);

interface AuthorsLayoutListProps {
  pending?: boolean
}

export const AuthorsLayoutList: React.FC<AuthorsLayoutListProps> = (props) => {
  const {
    children,
    pending = false,
  } = props;

  return (
    <div className={cx('root', { pending })}>
      {pending ? (
        <Spinner className={cx('spinner')}/>
      ) : (
        children
      )}
    </div>
  );
};
