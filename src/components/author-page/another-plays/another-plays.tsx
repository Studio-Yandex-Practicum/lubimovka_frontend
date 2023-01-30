import cn from 'classnames/bind';

import { Button } from 'components/ui/button';

import type { FC } from 'react';

import styles from './another-plays.module.css';

const cx = cn.bind(styles);

type PlayLink = {
  title: string
  href?: Url
}

interface AnotherPlaysProps {
  links: PlayLink[];
}

export const AnotherPlays: FC<AnotherPlaysProps> = ({ links }) => {
  return (
    <section className={cx('anotherPlays')}>
      <h2 className={cx('heading')}>
        Другие пьесы
      </h2>
      <ul className={cx('blocks')}>
        {links.map((link, index) => (
          <li className={cx('block')} key={index}>
            <p className={cx('paragraph')}>
              {link.title}
            </p>
            {link.href && (
              <a className={cx('downloadButton')} href={link.href} download>
                <Button
                  size="l"
                  iconPlace="right"
                  icon="arrow-down"
                  label="Скачать"
                  border="none"
                />
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
