import { AboutUsLayout } from 'components/about-us-layout';
import { AppLayout } from 'components/app-layout';
import { SEO } from 'components/seo';
import { WhatWeDoAuthors } from 'components/what-we-do-page/authors';
import { WhatWeDoContacts } from 'components/what-we-do-page/contacts';
import { WhatWeDoDesc } from 'components/what-we-do-page/desc';
import { WhatWeDoHeader } from 'components/what-we-do-page/header';
import { WhatWeDoPoster } from 'components/what-we-do-page/poster';
import { WhatWeDoSelection } from 'components/what-we-do-page/selection';

const AboutUs = () => {
  return (
    <AppLayout
      navbarProps={{ colors: 'brand' }}
    >
      <SEO title="Что мы делаем?"/>
      <AboutUsLayout colors="brand">
        <WhatWeDoHeader/>
        <WhatWeDoDesc/>
        <WhatWeDoAuthors/>
        <WhatWeDoSelection/>
        <WhatWeDoPoster/>
        <WhatWeDoContacts/>
      </AboutUsLayout>
    </AppLayout>
  );
};

export default AboutUs;
