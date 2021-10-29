import Head from 'next/head';

// Компоненты
import { WhatWeDoHeader } from 'components/what-we-do/header';
import { WhatWeDoDesc } from 'components/what-we-do/desc';
import { WhatWeDoAuthors } from 'components/what-we-do/authors';
import { WhatWeDoSelection } from 'components/what-we-do/selection';
import { WhatWeDoContacts } from 'components/what-we-do/contacts';
import { WhatWeDoPartners } from 'components/what-we-do/partners';
// data json
import headerData from 'components/what-we-do/assets/header-data.json';
import descData from 'components/what-we-do/assets/desc-data.json';
import AuthorsData from 'components/what-we-do/assets/authors-data.json';
import SelectionData from 'components/what-we-do/assets/selection-data.json';
import SelectionContacts from 'components/what-we-do/assets/contacts-data.json';

export const WhatWeDo = ():JSX.Element => (
  <>
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
  </>
);
