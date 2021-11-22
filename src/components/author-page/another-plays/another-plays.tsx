import { FC } from 'react';
import { Button } from 'components/ui/button';

import cn from 'classnames';
import styles from './another-plays.module.css';

interface dataList {
  id: string;
  paragraph: string;
}

interface IAnotherPlays {
  data: {
    title: string;
    list: dataList[];
  }
}

export const AnotherPlays: FC<IAnotherPlays> = ({ data }) => {
  return (
    <section className={cn(styles.anotherPlays)}>
      <h2 className={cn(styles.heading)}>{data.title}</h2>
      <ul className={cn(styles.blocks)}>
        {data.list.map((item) =>
          <li className={cn(styles.block)} key={item.id}>
            <p className={cn(styles.paragraph)}>{item.paragraph}</p>
            <div className={cn(styles.downloadButton)}>
              <Button
                size='l'
                iconPlace='right'
                icon='arrow-down'
                label='Скачать'
                border='none'
              />
            </div>
          </li>
        )}
      </ul>
    </section>
  );
};
