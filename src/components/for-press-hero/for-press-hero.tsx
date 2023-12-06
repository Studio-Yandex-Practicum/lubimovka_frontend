import cn from 'classnames/bind';

import { ForPressHeroDescription } from 'components/for-press-hero/for-press-hero-description';
import { ForPressHeroPrContact } from 'components/for-press-hero/for-press-hero-pr-contact';
import { ForPressHeroTitle } from 'components/for-press-hero/for-press-hero-title';

import type { FC } from 'react';

import styles from './for-press-hero.module.css';

const cx = cn.bind(styles);

export interface ForPressHeroProps {
  customClass?: string
  data: {
    forPressHeroTitle: ForPressHeroTitle
    forPressHeroDescription: ForPressHeroDescription
    prPerson: PRPerson
  }
}

export type ForPressHeroTitle = {
  title: string
}

export type ForPressHeroDescription = {
  description: string
  link: Url
}

export type PRPerson = {
  name: string
  nameDative: string
  email: Email
  role: string
  photo: string
}

export const ForPressHero: FC<ForPressHeroProps> = ({ data }) => {

  return (
    <section className={cx('hero')}>
      <ForPressHeroTitle
        data={data.forPressHeroTitle}
        customClass={cx('heroTitle')}
      />
      <ForPressHeroDescription
        data={data.forPressHeroDescription}
        customClass={cx('heroDescription')}
      />
      <ForPressHeroPrContact
        data={data.prPerson}
        customClass={cx('heroPrContact')}
      />
    </section>
  );
};
