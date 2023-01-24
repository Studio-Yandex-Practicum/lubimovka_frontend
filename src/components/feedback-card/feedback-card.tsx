import classNames from 'classnames/bind';
import Image from 'next/image';

import { ArrowButton } from 'components/arrow-button';

import styles from './feedback-card.module.css';

const cx = classNames.bind(styles);

interface FeedbackProps {
  author: string
  photoUrl?: Url
  tldr?: string
  text: string
  pagination: React.ReactNode
  onBackward: () => void
  onForward: () => void
}

export const FeedbackCard: React.VFC<FeedbackProps> = (props) => {
  const {
    author,
    photoUrl,
    tldr,
    text,
    pagination,
    onBackward,
    onForward
  } = props;

  return (
    <div className={cx('root')}>
      <div className={cx('author')}>
        {photoUrl && (
          <div className={cx('photo')}>
            <Image
              src={photoUrl}
              width={76}
              height={76}
              layout="fill"
              alt=""
            />
          </div>
        )}
        {author}
      </div>
      <p className={cx('tldr')}>
        {tldr}
      </p>
      <p className={cx('text')}>
        {text}
      </p>
      <div className={cx('controls')}>
        <div className={cx('backward')}>
          <ArrowButton
            variant="backward"
            text="Предыдущий отзыв"
            onClick={onBackward}
          />
        </div>
        <div className={cx('forward')}>
          <ArrowButton
            variant="forward"
            text="Следующий отзыв"
            onClick={onForward}
          />
        </div>
      </div>
      <div className={cx('pagination')}>
        {pagination}
      </div>
    </div>
  );
};
