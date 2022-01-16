import { FC } from 'react';
import cn from 'classnames';

import { Button } from 'components/ui/button';

import styles from './another-plays.module.css';

interface dataList {
  name: string;
  link: string;
}

interface IAnotherPlays {
  data: dataList[];
}

export const AnotherPlays: FC<IAnotherPlays> = ({ data }) => {
  return (
    <section className={cn(styles.anotherPlays)}>
      <h2 className={cn(styles.heading)}>Другие пьесы</h2>
      <ul className={cn(styles.blocks)}>
        {data.map((item, idx) =>
          <li className={cn(styles.block)} key={idx}>
            <p className={cn(styles.paragraph)}>{item.name}</p>
            <a className={cn(styles.downloadButton)} href={item.link} download>
              <Button
                size="l"
                iconPlace="right"
                icon="arrow-down"
                label="Скачать"
                border="none"
              />
            </a>
          </li>
        )}
      </ul>
    </section>
  );
};
