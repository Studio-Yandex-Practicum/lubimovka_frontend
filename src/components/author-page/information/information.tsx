import { FC } from 'react';
import cn from 'classnames/bind';

import { InfoLink } from 'components/ui/info-link';
import { OtherLink } from '__generated__/api-typings';

import styles from './information.module.css';

const cx = cn.bind(styles);

interface IAuthorInformation {
  links: OtherLink[],
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
              <InfoLink
                label={item.name}
                href={item.link}
                icon="arrow-right"
                iconPlace="right"
                size="xl"
                border="borderTop"
                iconClassName={cx('anchor')}
              />
            </div>
          ))
        }
      </div>
    </section>
  );
};
