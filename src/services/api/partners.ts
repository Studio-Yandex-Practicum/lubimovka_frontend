import { objectToQueryString } from '@funboxteam/diamonds';

import { fetcher } from 'services/fetcher';

import type { PartnerListOutput as PartnerDTO } from 'api-typings';
import type { Partner } from 'core/partner';

export function getPartners({ onlyGeneral = false }  = {}) {
  const params = objectToQueryString({
    is_general: onlyGeneral,
  });

  return fetcher<PartnerDTO[]>(`/info/partners/${params}`).then(mapDTOToPartner);
};

function mapDTOToPartner(dto: PartnerDTO[]): Partner[] {
  return dto.map((partner) => ({
    name: partner.name,
    description: partner.description,
    logo: partner.image,
    type: partner.type,
    url: partner.url,
  }));
};
