import cn from 'classnames/bind';

import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';

import styles from './another-plays.module.css';

import type { FC } from 'react';
import type { Url } from 'shared/types';

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
                  icon={(
                    <Icon
                      glyph="arrow-down"
                      width="100%"
                      height="100%"
                    />
                  )}
                  iconPosition="right"
                  href="https://t.me/lubimovka"
                >
                  Скачать
                </Button>
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
