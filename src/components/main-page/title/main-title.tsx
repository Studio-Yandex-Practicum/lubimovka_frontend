import { FC } from 'react';
import cn from 'classnames/bind';

import { Button } from 'components/ui/button';

import styles from './main-title.module.css';

export interface IMainTitle {
  title: string;
  description: string;
  button_label: string;
}

const cx = cn.bind(styles);
export const MainTitle: FC<IMainTitle> = ({ title, button_label, description }) => {
  // Если в заголовке только два слова - разделяем их символом переноса строки, в противном случае оставляем всё как есть
  const titleSpace = title.split(' ').length === 2 ? title.replace(' ', '\n') : title;

  return (
    <section className={cx('section')}>
      <div className={cx('wrapper')}>
        <h1 className={cx('title')}>{titleSpace}</h1>
        <div className={cx('buttonContainer')}>
          <Button
            label={button_label}
            isLink
            href='/afishe'
            size='s'
            border='bottomLeft'
            iconPlace='left'
            className={cx('icon')}
            icon="arrow-right"
            width="100%"
          />
        </div>
      </div>
      <p className={cx('desc')}>{description}</p>
    </section>
  );
};
