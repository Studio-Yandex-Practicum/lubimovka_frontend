import { NextPage } from 'next';
import Head from 'next/head';

import { AppLayout } from '../../components/app-layout';

// Компоненты
import { WhatWeDoHeader } from 'components/what-we-do-header';
import { WhatWeDoDesc } from 'components/what-we-do-desc';
import { WhatWeDoAuthors } from 'components/what-we-do-authors';
import { WhatWeDoSelection } from 'components/what-we-do-selection';
import { WhatWeDoContacts } from 'components/what-we-do-contacts';
import { WhatWeDoPartners } from 'components/what-we-do-partners';

// Данные
import headerData from './assets/what-we-do-header-data.json';
import descData from './assets/what-we-do-desc-data.json';
import AuthorsData from './assets/what-we-do-authors-data.json';
import SelectionData from './assets/what-we-do-selection-data.json';
import SelectionContacts from './assets/what-we-do-contacts-data.json';

const WhatWeDo: NextPage = () => (
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

export default WhatWeDo;
