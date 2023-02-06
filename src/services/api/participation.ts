import { fetcher } from 'services/fetcher';

import type { ParticipationFormFields } from 'core/participation';

export function postParticipation(fields: ParticipationFormFields) {
  const data = new FormData();

  data.append('first_name', fields.firstName);
  data.append('last_name', fields.lastName);
  data.append('birth_year', fields.birthYear);
  data.append('city', fields.city);
  data.append('phone_number', fields.phoneNumber);
  data.append('email', fields.email);
  data.append('title', fields.title);
  data.append('year', fields.year);
  data.append('file', fields.file!); // TODO: улучшить типизацию, здесь особенности реализации не должны влиять на опциональность поля

  return fetcher('/feedback/participation/', {
    method: 'POST',
    body: data,
  });
}

export type ParticipationDTOFields = 'first_name' | 'last_name' | 'birth_year' | 'city' | 'phone_number' | 'email' | 'title' | 'year' | 'file'

export type ParticipationErrorDTO = {
  statusCode: 400
  payload: {
    non_field_errors: string[]
    detail?: never
  }
} | {
  statusCode: 400
  payload: {
    non_field_errors?: never
    detail?: never
  } & {
    [field in ParticipationDTOFields]?: string[]
  }
} | {
  statusCode: 403
  payload: {
    detail: string
    non_field_errors?: never
  }
}
