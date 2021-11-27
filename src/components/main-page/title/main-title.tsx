import { FC } from 'react';
import cn from 'classnames/bind';

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
  const { view, text, buttonText, buttonLink } = params;

  // Если в заголовке только два слова - разделяем их символом переноса строки, в противном случае оставляем всё как есть
  const title =
    params.title.split(' ').length === 2 ? params.title.replace(' ', '\n') : params.title;
  return (
    <section className={cx('section', view)}>
      <div className={cx('wrapper', view)}>
        <h1 className={cx('title', view)}>{`${title}`}</h1>
        <div className={cx('buttonContainer', view)}>
          <Button
            label={buttonText}
            isLink
            href={buttonLink}
            size={view === 'primary' && 's' || 'l'}
            border={(view === 'secondary' && 'full') || 'bottomLeft'}
            icon="arrow-right"
            iconPlace={view === 'secondary' && 'right' || 'left'}
            width="100%"
            align={view === 'secondary' && 'space-between' || 'start'}
            gap="8px"
            className={cx('button', view)}
          />
        </div>
      </div>

      {view === 'primary' && <p className={cx('text')}>{text}</p>}
    </section>
  );
};
