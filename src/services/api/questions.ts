import { fetcher } from 'services/fetcher';

import type { questionsFormFields } from '../../core/questions';

export function postQuestions(fields: questionsFormFields) {
  const data= {
    author_name: fields.name,
    author_email: fields.email,
    question: fields.message,
  };

  return fetcher('/feedback/questions/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data),
  });
}

export type QuestionsDTOFields = 'author_name' | 'author_email' | 'question'

export type QuestionsErrorDTO = {
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
    [field in QuestionsDTOFields]?: string[]
  }
} | {
  statusCode: 403
  payload: {
    detail: string
    non_field_errors?: never
  }
}
