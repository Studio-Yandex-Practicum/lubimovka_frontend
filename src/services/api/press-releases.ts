import { fetcher } from 'services/fetcher';

import type { FestivalYear } from 'core/festival';
import type { PressRelease } from 'core/press-release';
import type { PressRelease as PressReleaseDTO, Years as PressReleaseYearsDTO } from '__generated__/api-typings';

export function getFestivalYears(): Promise<FestivalYear[]> {
  return fetcher<PressReleaseYearsDTO>('/info/press-releases/years/').then(({ years }) => years);
}

export function getPressRelease(year: FestivalYear): Promise<PressRelease> {
  return fetcher<PressReleaseDTO>(`/info/press-releases/${year}/`).then(mapDTOToPressRelease);
}

function mapDTOToPressRelease(dto: PressReleaseDTO): PressRelease {
  return {
    text: dto.text,
    imageUrl: dto.press_release_image,
  };
}

