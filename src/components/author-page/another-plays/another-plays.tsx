import cn from 'classnames/bind';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

import type { FC } from 'react';

import styles from './another-plays.module.css';

const cx = cn.bind(styles);

type PlayLink = {
  title: string
  href?: Url
}

interface AnotherPlaysProps {
  links: PlayLink[]
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
              <Button
                size='l'
                border='none'
                href={link.href}
                icon={(
                  <Icon
                    glyph="arrow-down"
                    width="100%"
                    height="100%"
                  />
                )}
                iconPosition='right'
                className={cx('downloadButton')}
                download
              >
                {'СКАЧАТЬ'}
              </Button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
