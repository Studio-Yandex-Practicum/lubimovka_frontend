import { NextPage } from 'next';

// Компоненты
import { WhatWeDoHeader } from '../../components/what-we-do/what-we-do-header';
import { WhatWeDoDesc } from '../../components/what-we-do/what-we-do-desc';
import { WhatWeDoAuthors } from '../../components/what-we-do/what-we-do-authors';

// Данные
import headerData from './assets/what-we-do-header-data.json';
import descData from './assets/what-we-do-desc-data.json';
import AuthorsData from './assets/what-we-do-authors-data.json';

const WhatWeDo: NextPage = () => (
  <main>
    {
      headerData.map((data) => (
        <WhatWeDoHeader key={ data.id } data={ data } />
      )) 
    }
    {
      descData.map((data, i) => (
        <WhatWeDoDesc key={ i } data={ data } />
      )) 
    }
    {
      AuthorsData.map((data) => (
        <WhatWeDoAuthors key={ data.id } data={ data } />
      )) 
    }
  </main>
);

export default WhatWeDo;
