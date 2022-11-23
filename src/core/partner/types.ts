import { PartnerType } from './constants';

export type Partner = {
  name: string,
  description?: string,
  logo: Url,
  type: keyof typeof PartnerType,
  url: Url,
}
