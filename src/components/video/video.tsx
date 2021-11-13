import classNames from 'classnames/bind';

import styles from './video.module.css';
import { Url } from 'shared/types';

interface IVideoProps {
  type: 'performance';
  link: Url,
}
const cx = classNames.bind(styles);

export const Video = (props: IVideoProps): JSX.Element => {
  const { type, link } = props;

  return (
    <iframe className={cx('video', type)} src={link} allowFullScreen />
  );
};
