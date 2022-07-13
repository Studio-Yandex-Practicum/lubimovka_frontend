import { NextPage } from 'next';

import { SEO } from 'components/seo';
import { AppLayout } from 'components/app-layout';
import { AboutUsLayout } from 'components/about-us-layout';
import MissionSection from 'components/mission-section';

import missionItems from 'shared/constants/mission-items';

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
