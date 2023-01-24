import classNames from 'classnames/bind';

import styles from './image-carousel.module.css';

const cx = classNames.bind(styles);

export const ImageCarouselSlide: React.FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('slide', 'keen-slider__slide')}>
      {children}
    </div>
  );
};

