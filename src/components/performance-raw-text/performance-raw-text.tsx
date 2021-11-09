import classNames from 'classnames/bind';

import styles from './performance-raw-text.module.css';

interface IPerformanceRawTextProps {
  children: string,
}

const cx = classNames.bind(styles);

export const PerformanceRawText = (props: IPerformanceRawTextProps): JSX.Element => {
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
