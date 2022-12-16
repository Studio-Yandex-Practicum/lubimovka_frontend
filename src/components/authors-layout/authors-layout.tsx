import classNames from 'classnames/bind';

import { AuthorsLayoutHeading } from './heading';
import { AuthorsLayoutList } from './list';

import styles from './authors-layout.module.css';

const cx = classNames.bind(styles);

const Component: React.FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};

export const AuthorsLayout = Object.assign(Component, {
  Heading: AuthorsLayoutHeading,
  List: AuthorsLayoutList,
});
