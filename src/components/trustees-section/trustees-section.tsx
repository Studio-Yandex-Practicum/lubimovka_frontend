import { FC } from 'react';

import {Icon} from '../ui/icon';

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
      <div className={style.container}>
        <div className={style.becomeTrustee}>
          <Icon glyph={'asterisk'} />
          <p className={style.accent}>{accent}
            <a className={style.mailLink} href={`mailto:${link}`} target="_blank" rel="noreferrer">{link}</a>
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
