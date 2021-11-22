import { NextPage } from 'next';

import textData from './assets/mock-text-data.json';
import trusteesData from './assets/mock-trustees-data.json';

import AppLayout from 'components/app-layout';
import TrusteesSection from 'components/trustees-section/trustees-section';
import TrusteesPersons from 'components/trustees-persons-list/trustees-persons-list';

const Trustees: NextPage = () => (

  <AppLayout>
    <main>
      <TrusteesSection text={textData}>
        <TrusteesPersons trustees={trusteesData}/>
      </TrusteesSection>
    </main>
  </AppLayout>

);

export default Trustees;

