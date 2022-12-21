import classNames from 'classnames/bind';

import styles from './library-layout.module.css';

interface LibraryLayoutFilterProps {
  area: 'filter' | 'pagination' | 'content'
  className?: string
}

const cx = classNames.bind(styles);

export const LibraryLayoutSlot: React.FC<LibraryLayoutFilterProps> = (props) => {
  const {
    area,
    className,
    children,
  } = props;

  return (
    <div className={cx(area, className)}>
      {children}
    </div>
  );
};
