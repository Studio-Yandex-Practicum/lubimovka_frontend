import { FC } from 'react';
import cn from 'classnames/bind';

import { InfoLink } from 'components/ui/info-link';

import styles from './information.module.css';

const cx = cn.bind(styles);

interface dataList {
  name: string,
  link: string,
  is_pinned: boolean,
  order_number: number,
}

interface IAuthorInformation {
  data: dataList[],
}

export const AuthorInformation: FC<IAuthorInformation> = ({ data }) => {
  const pinnedLinks = data.filter((item) => !item.is_pinned);

  return (
    <>
      {pinnedLinks.length > 0 &&
        <section className={cx('information')}>
          <h2 className={cx('heading')}>Публикации и другие материалы</h2>
          <div className={cx('blocksInfo')}>
            {pinnedLinks
              .sort((link1, link2) => link1.order_number - link2.order_number)
              .map((item, idx) =>
                <div className={cx('anchorHeading')} key={idx}>
                  <InfoLink
                    label={item.name}
                    href={item.link}
                    icon='arrow-right'
                    iconPlace='right'
                    size='xl'
                    border='borderTop'
                    iconClassName={cx('anchor')}
                  />
                </div>
              )
            }
          </div>
        </section>
      }
    </>
  );
};
