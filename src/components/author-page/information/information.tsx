import cn from 'classnames/bind';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

import type { OtherLink } from '__generated__/api-typings';
import type { FC } from 'react';

import styles from './information.module.css';

const cx = cn.bind(styles);

interface IAuthorInformation {
  links: OtherLink[]
}

export const AuthorInformation: FC<IAuthorInformation> = ({ links }) => {

  return (
    <section className={cx('information')}>
      <h2 className={cx('heading')}>
        Публикации и другие материалы
      </h2>
      <div className={cx('blocksInfo')}>
        {links
          .map((item, idx) => (
            <div className={cx('anchorHeading')} key={idx}>
              <Button
                size="m"
                border="top"
                fullWidth
                href={item.link}
                icon={(
                  <Icon
                    glyph="arrow-right"
                    width="100%"
                    height="100%"
                  />
                )}
                iconPosition="right"
                animation='invert'
              >
                {item.name}
              </Button>
            </div>
          ))
        }
      </div>
    </section>
  );
};
