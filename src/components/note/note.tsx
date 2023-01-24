import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import styles from './note.module.css';

const cx = classNames.bind(styles);

export const Note: React.FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      <Icon
        glyph="asterisk"
        className={cx('asterisk')}
      />
      {children}
    </div>
  );
};
