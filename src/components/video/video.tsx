import { HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './video.module.css';
import { Url } from 'shared/types';

interface IVideoProps extends HTMLAttributes<HTMLIFrameElement>{
  src: Url,
}
const cx = classNames.bind(styles);

export const Video = (props: IVideoProps): JSX.Element => {
  const { src, className, ...restProps } = props;

  return (
    <iframe
      className={cx('video', className)}
      src={src}
      allowFullScreen
      {...restProps}
    />
  );
};
