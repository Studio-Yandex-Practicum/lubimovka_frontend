import Head from 'next/head';
import { NextPage } from 'next';

import AppLayout from 'components/app-layout';

// Компоненты
import { WhatWeDoHeader } from 'components/what-we-do-page/header';
import { WhatWeDoDesc } from 'components/what-we-do-page/desc';
import { WhatWeDoAuthors } from 'components/what-we-do-page/authors';
import { WhatWeDoSelection } from 'components/what-we-do-page/selection';
import { WhatWeDoContacts } from 'components/what-we-do-page/contacts';
import { WhatWeDoPartners } from 'components/what-we-do-page/partners';
// data json
import headerData from 'components/what-we-do-page/assets/header-data.json';
import descData from 'components/what-we-do-page/assets/desc-data.json';
import AuthorsData from 'components/what-we-do-page/assets/authors-data.json';
import SelectionData from 'components/what-we-do-page/assets/selection-data.json';
import SelectionContacts from 'components/what-we-do-page/assets/contacts-data.json';

const Page: NextPage = () => (
  <AppLayout>
    <Head>
      <title>{'what-we-do'}</title>
    </Head>
    <main>
      {headerData.map((data) => (
        <WhatWeDoHeader key={ data.id } data={ data } />
      ))}
      {descData.map((data, i) => (
        <WhatWeDoDesc key={ i } data={ data } />
      ))}
      {AuthorsData.map((data) => (
        <WhatWeDoAuthors key={ data.id } data={ data } />
      ))}
      {SelectionData.map((data) => (
        <WhatWeDoSelection key={ data.id } data={ data } />
      ))}
      {SelectionContacts.map((data) => (
        <WhatWeDoContacts key={ data.id } data={ data } />
      ))}
      <WhatWeDoPartners />
    </main>
  </AppLayout>
);

export default Page;
