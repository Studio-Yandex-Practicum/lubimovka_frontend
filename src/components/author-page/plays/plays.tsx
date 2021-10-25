import { FC } from 'react';
import { Section } from 'components/section';
import { BasicPlayCardList } from './../../ui/basic-play-card/list/basic-play-card-list';

import cn from 'classnames';
import styles from './plays.module.css';

export const AuthorPlays: FC = (props) => {
  return (
    <section className={ cn(styles.plays) }>
      <Section type='plays' title=''>
        <BasicPlayCardList />
      </Section>
    </section>
  );
};
