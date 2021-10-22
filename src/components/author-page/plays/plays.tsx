import { FC } from 'react';
import cn from 'classnames';
import styles from '../author.module.css';

import { Section } from '../../section';
import { Default as DefaultBasicPlayCardList } from '../../ui/basic-play-card/list/basic-play-card-list.stories';

export const AuthorPlays: FC = () => {
  return (
    <section className={ cn(styles.plays) }>
      <Section type={'plays'} title={''}>
        <DefaultBasicPlayCardList { ...DefaultBasicPlayCardList.args } />
      </Section>
    </section>
  );
};
