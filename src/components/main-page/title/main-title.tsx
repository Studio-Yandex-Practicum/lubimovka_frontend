import { FC } from 'react';
import cn from 'classnames/bind';

import { Section } from 'components/section';
import { Button } from 'components/ui/button';
import styles from './main-title.module.css';

export interface IMainTitle {
  title: string;
  view: string;
  text?: string;
  buttonText: string;
  buttonLink: string;
}

const cx = cn.bind(styles);
export const MainTitle: FC<IMainTitle> = (params) => {
  const { title, view, text, buttonText, buttonLink } = params;
  return (
    <section className={cx('section')}>
      <h1 className={cx('title', view)}>{title}</h1>

      <Button
        label={buttonText}
        isLink
        href={buttonLink}
        width={(view === 'primary' && '180px') || '360px'}
        size={(view === 'primary' && 's') || 'l'}
        border="full"
        icon="arrow-right"
        iconPlace="right"
      />
      {view === 'primary' && <p>{text}</p>}
    </section>
  );
};
