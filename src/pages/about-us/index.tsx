import { fetcher } from 'services/fetcher';
import { AppLayout } from 'components/app-layout';
import { WhatWeDoHeader } from 'components/what-we-do-page/header';
import { WhatWeDoDesc } from 'components/what-we-do-page/desc';
import { WhatWeDoAuthors } from 'components/what-we-do-page/authors';
import { WhatWeDoSelection } from 'components/what-we-do-page/selection';
import { WhatWeDoPoster } from 'components/what-we-do-page/poster';
import { WhatWeDoContacts } from 'components/what-we-do-page/contacts';
import { Section } from 'components/section';
import { PartnerList } from 'components/partner-list';
import { SEO } from 'components/seo';
import { partnerTypes } from 'shared/constants/partner-types';

import type { Partner, partner_type } from 'api-typings';
import type { InferGetServerSidePropsType  } from 'next';

const AboutUs = ({ partners }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const getPartnersGroups = () => Object.keys(partners) as partner_type[];

  return (
    <AppLayout
      navbarProps={{ colors: 'brand' }}
      hiddenPartners
    >
      <SEO
        title="Что мы делаем?"
      />
      <main>
        <WhatWeDoHeader/>
        <WhatWeDoDesc/>
        <WhatWeDoAuthors/>
        <WhatWeDoSelection/>
        <WhatWeDoPoster/>
        <WhatWeDoContacts/>
        {getPartnersGroups().map((group) => (
          <Section
            key={group}
            type="partners"
            title={getPartnerGroupTitle(group)}
          >
            <PartnerList>
              {partners[group].map((partner) => (
                <PartnerList.Item
                  key={partner.name}
                  logo={partner.image}
                  name={partner.name}
                />
              ))}
            </PartnerList>
          </Section>
        ))}
      </main>
    </AppLayout>
  );
};

const fetchPartners = async () => {
  try {
    const response = await fetcher<Partner[]>('/info/partners/');

    return response;
  } catch {
    return [];
  }
};

export const getServerSideProps = async () => {
  const partners = await fetchPartners();

  function groupPartnersByType(partners: Partner[]) {
    return partners.reduce<Record<partner_type, Partner[]>>((groups, partner) => {
      groups[partner.type] = groups[partner.type] ? [
        ...groups[partner.type],
        partner,
      ] : [partner];

      return groups;
    }, {} as Record<partner_type, Partner[]>);
  }

  return {
    props: {
      // TODO: договориться с бекендерами передавать массив значений для фильтра партнеров и избавиться от костыля с фильтрацией
      partners: groupPartnersByType(partners.filter(({ type }) => type !== 'general')),
    },
  };
};

export default AboutUs;

function getPartnerGroupTitle(partnerType: keyof typeof partnerTypes) {
  return partnerTypes[partnerType];
}
