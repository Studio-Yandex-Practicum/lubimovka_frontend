import classNames from 'classnames/bind';
import { useState } from 'react';

import { Spinner } from 'components/spinner';

import type { HTMLAttributes, ReactEventHandler } from 'react';

import styles from './video.module.css';

interface VideoProps extends HTMLAttributes<HTMLIFrameElement>{
  src: Url
}
const cx = classNames.bind(styles);

export const Video = (props: VideoProps) => {
  const {
    src,
    onLoad,
    className,
    ...restIFrameProps
  } = props;
  const [loading, setLoading] = useState(true);
  const changeSrc = src.replace(/watch\?v=/, 'embed/');

  const handleIFrameLoad: ReactEventHandler<HTMLIFrameElement> = (event) => {
    setLoading(false);

    if (onLoad) {
      onLoad(event);
    }
  };

  return (
    <div
      className={cx(
        { loading },
        className,
      )}
    >
      <iframe
        onLoad={handleIFrameLoad}
        className={cx('iframe')}
        src={changeSrc}
        allowFullScreen
        {...restIFrameProps}
      />
      {loading && (
        <Spinner
          className={cx('spinner')}
        />
      )}
    </div>
  );
};
