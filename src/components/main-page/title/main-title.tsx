import { FC } from 'react';
import classNames from 'classnames/bind';

import { Button } from 'components/ui/button';

import styles from './main-title.module.css';

const cx = classNames.bind(styles);

export interface IMainTitle {
  title: string;
  description: string;
}

export const MainTitle: FC<IMainTitle> = ({ title, description }) => {
  const moreTwo = title.split(' ').length > 2;
  return (
    <section className={cx('section')}>
      <div className={cx('wrapper', {
        'width': moreTwo
      })}>
        <h1 className={cx('title')}>{title}</h1>
        <div className={cx('buttonContainer')}>
          <Button
            label="ПОЛНАЯ АФИША"
            isLink
            href="/afisha/events"
            size="s"
            border="bottomLeft"
            iconPlace="left"
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
