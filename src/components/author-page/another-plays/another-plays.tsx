import { FC } from 'react';
import cn from 'classnames/bind';

import { Button } from 'components/ui/button';

import styles from './another-plays.module.css';

const cx = cn.bind(styles);

interface dataList {
  name: string;
  link: string;
}

interface IAnotherPlays {
  data: dataList[];
}

export const AnotherPlays: FC<IAnotherPlays> = ({ data }) => {
  return (
    <section className={cx('anotherPlays')}>
      <h2 className={cx('heading')}>Другие пьесы</h2>
      <ul className={cx('blocks')}>
        {data.map((item, idx) =>
          <li className={cx('block')} key={idx}>
            <p className={cx('paragraph')}>{item.name}</p>
            <a className={cx('downloadButton')} href={item.link} download>
              <Button
                size='l'
                iconPlace='right'
                icon='arrow-down'
                label='Скачать'
                border='none'
              />
            </a>
          </li>
        )}
      </ul>
    </section>
  );
};
