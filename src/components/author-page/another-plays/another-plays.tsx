import { FC } from 'react';
import { Button } from 'components/ui/button';

import cn from 'classnames';
import styles from '../author.module.css';

export const AnotherPlays: FC = () => {
  return (
    <section className={cn(styles.anotherPlays)}>
      <h2 className={cn(styles.heading)}>Другие пьесы</h2>
      <ul className={cn(styles.blocks)}>
        <li className={cn(styles.block)}>
          <p className={cn(styles.paragraph)}>Камино норте</p>
          <div className={cn(styles.downloadButton)}>
            <Button size='s' iconPlace='right' icon='arrow-down' label='Скачать' border='none'/>
          </div>
        </li>
        <li className={cn(styles.block)}>
          <p className={cn(styles.paragraph)}>Конкретные разговоры пожилых супругов ни о чём</p>
          <div className={cn(styles.downloadButton)}>
            <Button size='s' iconPlace='right' icon='arrow-down' label='Скачать' border='none'/>
          </div>
        </li>
        <li className={cn(styles.block)}>
          <p className={cn(styles.paragraph)}>Камино норте</p>
          <div className={cn(styles.downloadButton)}>
            <Button size='s' iconPlace='right' icon='arrow-down' label='Скачать' border='none'/>
          </div>
        </li>
        <li className={cn(styles.block)}>
          <p className={cn(styles.paragraph)}>Камино норте</p>
          <div className={cn(styles.downloadButton)}>
            <Button size='s' iconPlace='right' icon='arrow-down' label='Скачать' border='none'/>
          </div>
        </li>
      </ul>
    </section>
  );
};
