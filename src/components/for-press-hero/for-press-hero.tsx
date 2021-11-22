import { FC } from 'react';
import cn from 'classnames/bind';
import { ForPressHeroTitle } from 'components/for-press-hero/for-press-hero-title';
import dataHeroTitle from 'components/for-press-hero/for-press-hero-title/assets/mock-data.json';
import { ForPressHeroDescription } from 'components/for-press-hero/for-press-hero-description';
import dataHeroDescription from 'components/for-press-hero/for-press-hero-description/assets/mock-data.json';
import { ForPressHeroPrContact } from 'components/for-press-hero/for-press-hero-pr-contact';
import dataHeroPrContact from 'components/for-press-hero/for-press-hero-pr-contact/assets/mock-data.json';

import styles from './for-press-hero.module.css';

const cx = cn.bind(styles);

interface ForPressHeroProps {
  customClass?: string;
}

export const ForPressHero: FC<ForPressHeroProps> = () => {

  return (
    <section className={cx('hero')}>
      <ForPressHeroTitle
        data={dataHeroTitle}
        customClass={cx('heroTitle')}
      />
      <ForPressHeroDescription
        data={dataHeroDescription}
        customClass={cx('heroDescription')}
      />
      <ForPressHeroPrContact
        data={dataHeroPrContact}
        customClass={cx('heroPrContact')}
      />
    </section>
  );
};
