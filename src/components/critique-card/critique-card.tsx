import { FC } from 'react';
import classNames from 'classnames/bind';

import { Url } from 'shared/types';
import styles from './critique-card.module.css';

import { InfoLink } from '../ui/info-link';

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
          <InfoLink
            isOutsideLink
            href='#'
            label='Читать полностью'
            icon='arrow-45'
            iconPlace='left'
            size='s'
            textTransform='uppercase'
            border='borderBottomLeft'
            className={cx('action')}
          />
        </div>
      )}
    </article>
  );
};
