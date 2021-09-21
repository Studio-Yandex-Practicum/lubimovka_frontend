import { FC } from 'react';
import cn from 'classnames';

import styles from './arrow-mock.module.css';

interface IArrowMockProps {
  className?: string;
  direction?: 'right' | 'left';
  onClick?: () => void
}

export const ArrowMock: FC<IArrowMockProps> = (props) => {
  const { className, onClick } = props;

  return (
    <svg
      className={cn(styles.arrow, className)}
      display="block"
      width="50"
      height="50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <circle display="block" cx="25" cy="25" r="25" fill="#242424"/>
    </svg>
  );
};
