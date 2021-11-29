import type { IPlatform } from './PlatformItem';

export interface IPlatforms {
  readonly id: number
  readonly title: string
  readonly content: IPlatform[]
}
