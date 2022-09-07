import type { Url } from 'shared/types';

export type PartnerType = 'festival' | 'info'

export type Partner = {
  name: string,
  logo: Url,
  type: PartnerType,
  url?: Url,
}
