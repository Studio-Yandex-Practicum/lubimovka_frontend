import { NextPage } from 'next';

import { AppLayout } from 'components/app-layout';
import { WhatWeDo } from 'components/what-we-do';

const Page: NextPage = () => (
  <AppLayout>
    <WhatWeDo />
  </AppLayout>
);

export default Page;
