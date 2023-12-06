import { objectToQueryString } from '@funboxteam/diamonds';
import useSWR from 'swr';

import { fetcher } from 'services/fetcher';

import type { PartnerListOutput as PartnerDTO } from '__generated__/api-typings';
import type { Partner, PartnerFilters } from 'core/partner';

const RESOURCE_URL = '/info/partners/';

export function fetchPartners({
  onlyGeneral = false
}: PartnerFilters = {}) {
  const params = objectToQueryString({
    ...onlyGeneral && { is_general: true },
  });

  return fetcher<PartnerDTO[]>(`${RESOURCE_URL}${params}`).then(mapDTOToPartner);
}

function mapDTOToPartner(dto: PartnerDTO[]): Partner[] {
  return dto.map((partner) => ({
    name: partner.name,
    description: partner.description,
    logo: partner.image,
    type: partner.type,
    url: partner.url,
  }));
}

export const usePartners = (filters: PartnerFilters = {}) => {
  const { data, error } = useSWR([RESOURCE_URL, filters], ([, filters]) => fetchPartners(filters));

  return {
    partners: data,
    error,
  };
};
