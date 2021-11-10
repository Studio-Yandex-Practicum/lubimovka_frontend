import {FC, HTMLAttributes} from 'react';
import classNames from 'classnames/bind';
import styles from './back-button.module.css';
import { Button } from '../ui/button';

const cx = classNames.bind(styles);

interface IBackButtonProps extends HTMLAttributes<HTMLElement> {
  label: string,
  href: string,
}

export const BackButton: FC<IBackButtonProps> = (props) => {
  const { label, href } = props;

  return (
    <div className={cx('buttonWrapper')}>
      <Button
        type='button'
        iconPlace='right'
        icon='arrow-left'
        size="s"
        border='bottomRight'
        isLink
        label={label}
        href={href} />
    </div>
  );
};
