import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

import { Url } from 'shared/types';
import styles from './critique-card.module.css';

interface ICritiqueCardProps {
  logo?: Url,
  text: string,
  href?: Url,
}

const cx = classNames.bind(styles);

export const CritiqueCard: FC<ICritiqueCardProps> = (props) => {
  const {
    logo,
    text,
    href,
  } = props;

  return (
    <article className={cx('card')}>
      {logo && (
        <img
          className={cx('logo')}
          src={logo}
          alt=""
        />
      )}
      <p className={cx('text')}>
        {text}
      </p>
      {href && (
        <div className={cx('action')}>
          <Link href={href}>
            <a>
              Читать полностью
            </a>
          </Link>
        </div>
      )}
    </article>
  );
};
