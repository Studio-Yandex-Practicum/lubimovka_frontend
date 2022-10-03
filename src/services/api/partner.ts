import { objectToQueryString } from '@funboxteam/diamonds';

import { fetcher } from 'services/fetcher';

import type { PartnerListOutput as PartnerDTO } from 'api-typings';
import type { Partner } from 'core/partner';

type GetPartnersParams = {
  onlyGeneral?: boolean,
}

export async function getPartners({ onlyGeneral = false }: GetPartnersParams  = {}) {
  const params = objectToQueryString({
    is_general: onlyGeneral,
  });

  return (await fetcher<PartnerDTO[]>(`/info/partners/${params}`)).map(mapDTOToPartner);
};

function mapDTOToPartner(dto: PartnerDTO): Partner {
  return {
    name: dto.name,
    logo: dto.image,
    type: dto.type,
    url: dto.url,
  };
};
