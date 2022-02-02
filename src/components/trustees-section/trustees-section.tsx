import React, { FC } from 'react';

import { Icon } from '../ui/icon';
import { AboutUsMenu } from 'components/what-we-do-page/about-us-menu/about-us-menu';
import { InfoLink } from 'components/ui/info-link/info-link';

import style from './trustees-section.module.css';

interface TrusteesSectionProps {
  text: {
    sectionTitle: string,
    accent: string,
    link: string,
    narrative: Array<string>,
  }
}

const TrusteesSection: FC<TrusteesSectionProps> = ({ text, children }) => {
  const { sectionTitle, accent, link, narrative } = text;

  return (
    <section className={style.section}>
      <div className={style.menu}>
        <AboutUsMenu/>
      </div>
      <div className={style.container}>
        <div className={style.becomeTrustee}>
          <Icon glyph={'asterisk'}/>
          <p className={style.accent}>{accent}
            <InfoLink
              href={'mailto:job@lubimovka.ru'}
              isOutsideLink={true}
              label={link}
              size={'xl'}
              textDecoration={'underline'}
            />
          </p>
        </div>
        <div className={style.mainText}>
          <h2 className={style.title}>{sectionTitle}</h2>
          <p className={style.narrative}>{narrative}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default TrusteesSection;

