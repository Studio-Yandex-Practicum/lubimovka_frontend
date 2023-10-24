import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

import type { FC } from 'react';

import style from './sponsors-section.module.css';

interface SponsorsSectionProps {
  title: string
  callToEmail: string
  callToEmailAddress?: string
  description: string
}

const SponsorsSection: FC<SponsorsSectionProps> = (props) => {
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
              <Button
                border="none"
                size="m"
                href={`mailto:${callToEmailAddress}`}
                className={style.mailLink}
                animation='invert'
              >
                {callToEmailAddress}
              </Button>
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

export default SponsorsSection;

