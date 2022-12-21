import classNames from 'classnames/bind';

import styles from './filter.module.css';

interface FilterListProps {
  caption: string
  hiddenCaption?: boolean
  className?: string
  addon?: React.ReactNode
}

const cx = classNames.bind(styles);

export const FilterList: React.FC<FilterListProps> = (props) => {
  const {
    caption,
    children,
    className,
    addon,
  } = props;

  return (
    <fieldset className={cx('list', className)}>
      <legend className={cx('list-caption')}>
        {caption}
      </legend>
      {children}
      {addon && (
        <div className={cx('list-addon')}>
          {addon}
        </div>
      )}
    </fieldset>
  );
};
