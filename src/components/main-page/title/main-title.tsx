/* eslint-disable import/no-unresolved */
import { FC } from 'react';
import cn from 'classnames/bind';

import { Button } from 'components/ui/button';

import styles from './main-title.module.css';

const cx = cn.bind(styles);

export interface IMainTitle {
  title: string;
  description: string;
  button_label: string;
}

export const MainTitle: FC<IMainTitle> = ({ title, button_label, description }) => {
  const moreTwo = title.split(' ').length > 2;
  return (
    <section className={cx('section')}>
      <div className={cx('wrapper', {
        'width': moreTwo
      })}>
        <h1 className={cx('title')}>{title}</h1>
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
        <p className={cx('desc', {
          'margin': moreTwo
        })}>
          {description}
        </p>
      </div>
    </section>
  );
};
