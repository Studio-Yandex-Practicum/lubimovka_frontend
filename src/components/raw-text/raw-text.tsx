import classNames from 'classnames/bind';

import styles from './raw-text.module.css';

interface IRawTextProps {
  children: string,
}

const cx = classNames.bind(styles);

export const RawText = (props: IRawTextProps): JSX.Element => {
  const { children } = props;

  return (
    <div
      className={cx('text')}
      dangerouslySetInnerHTML={{
        __html: children,
      }}
    />
  );
};
