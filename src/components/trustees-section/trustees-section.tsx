import { Icon } from 'components/ui/icon';
import { InfoLink } from 'components/ui/info-link/info-link';

import type { FC } from 'react';

import style from './trustees-section.module.css';

interface TrusteesSectionProps {
  title: string,
  callToEmail: string,
  callToEmailAddress?: string,
  description: string,
}

const TrusteesSection: FC<TrusteesSectionProps> = (props) => {
  const {
    title,
    callToEmail,
    callToEmailAddress,
    description,
    children,
  } = props;

  return (
    <section className={style.section}>
      <div className={style.container}>
        {callToEmailAddress && (
          <div className={style.becomeTrustee}>
            <Icon glyph={'asterisk'}/>
            <p className={style.accent}>
              {callToEmail}
              <InfoLink
                href={`mailto:${callToEmailAddress}`}
                isOutsideLink
                label={callToEmailAddress}
                size={'xl'}
                textDecoration={'underline'}
              />
            </p>
          </div>
        )}
        <div className={style.mainText}>
          <h2 className={style.title}>
            {title}
          </h2>
          <p className={style.narrative}>
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default TrusteesSection;

