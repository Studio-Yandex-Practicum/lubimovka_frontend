import { AppLayout } from 'components/app-layout';
import { AboutUsLayout } from 'components/about-us-layout';
import { WhatWeDoHeader } from 'components/what-we-do-page/header';
import { WhatWeDoDesc } from 'components/what-we-do-page/desc';
import { WhatWeDoAuthors } from 'components/what-we-do-page/authors';
import { WhatWeDoSelection } from 'components/what-we-do-page/selection';
import { WhatWeDoPoster } from 'components/what-we-do-page/poster';
import { WhatWeDoContacts } from 'components/what-we-do-page/contacts';
import { SEO } from 'components/seo';

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
