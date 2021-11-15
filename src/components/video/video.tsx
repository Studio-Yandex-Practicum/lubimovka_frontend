import classNames from 'classnames/bind';

import styles from './video.module.css';
import { Url } from 'shared/types';

interface IVideoProps {
  link: Url,
}
const cx = classNames.bind(styles);

export const Video = (props: IVideoProps): JSX.Element => {
  const { link } = props;

  return (
    <iframe className={cx('video')} src={link} allowFullScreen />
  );
};
