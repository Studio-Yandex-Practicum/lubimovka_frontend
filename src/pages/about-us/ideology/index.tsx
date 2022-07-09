import { NextPage } from 'next';

import { SEO } from 'components/seo';
import { AppLayout } from 'components/app-layout';
import { AboutUsLayout } from 'components/about-us-layout';
import IdeologySection from 'components/ideology-section';

import { ideologyItems } from 'shared/constants/ideology-items';

const Ideology: NextPage = () => (
  <AppLayout>
    <SEO title="Идеология"/>
    <AboutUsLayout>
      {ideologyItems.map((item) => (
        <IdeologySection
          key={item.id}
          data={item}
        />
      ))}
    </AboutUsLayout>
  </AppLayout>
);

export default Ideology;
