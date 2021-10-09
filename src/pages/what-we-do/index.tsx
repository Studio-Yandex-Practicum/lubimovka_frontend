import { NextPage } from 'next';

import { WhatWeDoHeader } from '../../components/what-we-do/what-we-do-header';

import headerData from './assets/what-we-do-header-data.json';

const WhatWeDo: NextPage = () => (
  <>
    {
      headerData.map((data) => (
        <WhatWeDoHeader key={ data.id } data={ data } />
      )) 
    }
  </>
);

export default WhatWeDo;
