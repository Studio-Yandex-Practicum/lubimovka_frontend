import classNames from 'classnames/bind';

import styles from './filter.module.css';

interface FilterFieldProps {
  caption: string
  hiddenCaption?: boolean
  className?: string
}

const cx = classNames.bind(styles);

export const FilterField: React.FC<FilterFieldProps> = (props) => {
  const {
    caption,
    children,
    hiddenCaption,
    className,
  } = props;

  return (
    <label
      className={cx(
        hiddenCaption ? 'field-hidden-caption' : 'field',
        className,
      )}
    >
      <span className={cx('field-caption')}>
        {caption}
      </span>
      <div className={cx('field-control')}>
        {children}
      </div>
    </label>
  );
};
