import { FC } from 'react';
import cn from 'classnames/bind';

import { Button } from 'components/ui/button';
import { OtherPlayLinks } from 'api-typings';

import styles from './another-plays.module.css';

const cx = cn.bind(styles);

interface IAnotherPlays {
  links: OtherPlayLinks[];
}

export const AnotherPlays: FC<IAnotherPlays> = ({ links }) => {
  return (
    <section className={cx('anotherPlays')}>
      <h2 className={cx('heading')}>
        Другие пьесы
      </h2>
      <ul className={cx('blocks')}>
        {links.map((item, idx) => (
          <li className={cx('block')} key={idx}>
            <p className={cx('paragraph')}>
              {item.name}
            </p>
            <a className={cx('downloadButton')} href={item.link} download>
              <Button
                size="l"
                iconPlace="right"
                icon="arrow-down"
                label="Скачать"
                border="none"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
