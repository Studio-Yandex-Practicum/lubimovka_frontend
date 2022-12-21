import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import styles from './library-layout.module.css';

interface LibraryLayoutFilterProps {
  className?: string
  onClick: () => void
}

const cx = classNames.bind(styles);

export const LibraryLayoutFilterToggler: React.FC<LibraryLayoutFilterProps> = (props) => {
  const {
    className,
    onClick,
  } = props;

  return (
    <div className={cx('filter-toggler', className)}>
      <button
        className={cx('filter-toggler')}
        onClick={onClick}
        type="button"
      >
        <Icon
          height="60%"
          width="60%"
          glyph="filter"
        />
        Закрыть
      </button>
    </div>
  );
};
