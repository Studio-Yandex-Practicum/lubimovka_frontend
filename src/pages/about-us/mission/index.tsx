
import { AboutUsLayout } from 'components/about-us-layout';
import { AppLayout } from 'components/app-layout';
import MissionSection from 'components/mission-section';
import { SEO } from 'components/seo';
import missionItems from 'shared/constants/mission-items';

import type { NextPage } from 'next';

const Mission: NextPage = () => (
  <AppLayout>
    <SEO title="Миссия"/>
    <AboutUsLayout>
      {missionItems.map((item) => (
        <MissionSection
          key={item.id}
          data={item}
        />
      ))}
    </AboutUsLayout>
  </AppLayout>
);

export default Mission;
