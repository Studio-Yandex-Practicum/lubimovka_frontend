import { useReducer } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { AppLayout } from 'components/app-layout';
import PlayProposalLayout from 'components/play-proposal-layout';
import PlayProposalTitle from 'components/play-proposal-title';
import { ParticipationForm } from 'components/participation-form';
import { SEO } from 'components/seo';
import {
  validYearRegexp,
  validEmailRegexp,
  validPhoneNumberRegexp,
} from 'shared/constants/regexps';
import { Nullable } from 'shared/types';
import { fetcher } from 'services/fetcher';
import { snakeToCamel } from 'shared/helpers/snake-to-camel';

interface ParticipationFormFields {
  firstName: string,
  lastName: string,
  birthYear: string,
  city: string,
  phoneNumber: string,
  email: string,
  title: string,
  year: string,
  file: Nullable<File>,
}

enum ParticipationFormActionTypes {
  FieldChange,
  FieldError,
}

type ParticipationFormAction<K extends keyof ParticipationFormFields = keyof ParticipationFormFields> =
  { type: ParticipationFormActionTypes.FieldChange, payload: { field: K, value: ParticipationFormFields[K], error?: string } }
  | { type: ParticipationFormActionTypes.FieldError, payload: { field: K, error: string } }

type ParticipationFormStateFields<T> = {
  [K in keyof T]: {
    value: T[K],
    wasChanged: boolean,
    error?: string,
  }
}

type ParticipationFormState = ParticipationFormStateFields<ParticipationFormFields>;

const CURRENT_YEAR = new Date().getFullYear().toString();

const initialParticipationFormState: ParticipationFormState = {
  firstName: { value: '', wasChanged: false },
  lastName: { value: '', wasChanged: false },
  birthYear: { value: '', wasChanged: false },
  city: { value: '', wasChanged: false },
  phoneNumber: { value: '', wasChanged: false },
  email: { value: '', wasChanged: false },
  title: { value: '', wasChanged: false },
  year: { value: '', wasChanged: false },
  file: { value: null, wasChanged: false },
};

const participationFormReducer = (state: ParticipationFormState, action: ParticipationFormAction) => {
  switch (action.type) {
  case ParticipationFormActionTypes.FieldChange:
    return {
      ...state,
      [action.payload.field]: {
        value: action.payload.value,
        wasChanged: true,
        error: action.payload.error,
      },
    };
  case ParticipationFormActionTypes.FieldError:
    return {
      ...state,
      [action.payload.field]: {
        ...state[action.payload.field],
        error: action.payload.error,
      },
    };
  default:
    return state;
  }
};

const Participation: NextPage = () => {
  const [participationFormState, dispatch] = useReducer(participationFormReducer, initialParticipationFormState);

  const {
    firstName,
    lastName,
    birthYear,
    city,
    phoneNumber,
    email,
    title,
    year,
    file,
  } = participationFormState;

  const router = useRouter();

  const getFieldError = <K extends keyof ParticipationFormFields>(field: K, value: ParticipationFormFields[K]) => {
    switch (field) {
    case 'firstName':
      if (!(value as ParticipationFormFields['firstName']).length) {
        return 'Это поле не может быть пустым';
      }
      if ((value as ParticipationFormFields['firstName']).length < 2) {
        return 'Имя должно состоять более чем из 2 символов';
      }
      if ((value as ParticipationFormFields['firstName']).length > 50) {
        return 'Имя должно состоять менее чем из 50 символов';
      }
      break;
    case 'lastName':
      if (!(value as ParticipationFormFields['lastName']).length) {
        return 'Это поле не может быть пустым';
      }
      if ((value as ParticipationFormFields['lastName']).length < 2) {
        return 'Фамилия должна содержать минимум 2 символа';
      }
      if ((value as ParticipationFormFields['lastName']).length > 50) {
        return 'Фамилия должна состоять менее чем из 50 символов';
      }
      break;
    case 'birthYear':
      if (!(value as ParticipationFormFields['birthYear']).length) {
        return 'Это поле не может быть пустым';
      }

      if (!validYearRegexp.test((value as ParticipationFormFields['birthYear']))) {
        return 'Убедитесь, что это значение больше либо равно 1900';
      }
      if ((value as ParticipationFormFields['birthYear']) > CURRENT_YEAR) {
        return `Убедитесь, что это значение больше либо равно ${CURRENT_YEAR}`;
      }
      break;
    case 'city':
      if (!(value as ParticipationFormFields['city']).length) {
        return 'Это поле не может быть пустым';
      }
      if ((value as ParticipationFormFields['city']).length < 2) {
        return 'Город должен содержать минимум 2 символа';
      }
      if ((value as ParticipationFormFields['city']).length > 50) {
        return 'Город должен состоять менее чем из 50 символов';
      }
      break;
    case 'phoneNumber':
      if (!(value as ParticipationFormFields['phoneNumber']).length) {
        return 'Это поле не может быть пустым';
      }
      if (!validPhoneNumberRegexp.test((value as ParticipationFormFields['phoneNumber']))) {
        return 'Некорректный номер телефона';
      }
      break;
    case 'email':
      if (!(value as ParticipationFormFields['email']).length) {
        return 'Это поле не может быть пустым';
      }
      if (!validEmailRegexp.test((value as ParticipationFormFields['email']))) {
        return 'Введите правильный адрес электронной почты';
      }
      break;
    case 'title':
      if (!(value as ParticipationFormFields['title']).length) {
        return 'Это поле не может быть пустым';
      }
      if ((value as ParticipationFormFields['title']).length > 200) {
        return 'Название пьесы должно состоять менее чем из 200 символов';
      }
      break;
    case 'year':
      if (!(value as ParticipationFormFields['year']).length) {
        return 'Это поле не может быть пустым';
      }

      if (!validYearRegexp.test((value as ParticipationFormFields['year']))) {
        return 'Убедитесь, что это значение больше либо равно 1900';
      }

      if ((value as ParticipationFormFields['year']) > CURRENT_YEAR) {
        return `Убедитесь, что это значение больше либо равно ${CURRENT_YEAR}`;
      }
      break;
    case 'file':
      if (!value) {
        return 'Файл обязателен';
      }

      const { name } = value as Exclude<ParticipationFormFields['file'], null>;

      if (/[а-яА-ЯЁё]/.test(name)) {
        return 'Файл содержит кириллицу, пожалуйста, переименуйте его.';
      }
      if (/[^A-Za-z._-]/.test(name)) {
        return 'Пожалуйста, используйте только латинские символы и знаки - и _';
      }
      break;
    default:
      return;
    }
  };

  const handleFieldChange = <K extends keyof ParticipationFormFields>(field: K) => (value: ParticipationFormFields[K]) => {
    dispatch({
      type: ParticipationFormActionTypes.FieldChange,
      payload: {
        field,
        value,
        error: getFieldError(field, value),
      },
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData();

    data.append('first_name', firstName.value);
    data.append('last_name', lastName.value);
    data.append('birth_year', birthYear.value);
    data.append('city', city.value);
    data.append('phone_number', phoneNumber.value);
    data.append('email', email.value);
    data.append('title', title.value);
    data.append('year', year.value);
    data.append('file', file.value!);

    try {
      await fetcher('/feedback/participation/', {
        method: 'POST',
        body: data,
      });
    } catch ({ status, error }) {
      // TODO: добавить проверку типов выброшенного исключения, пока считаем, что всегда получаем ответ API

      if (!status) return;

      for (let field in error as Record<string, string[]>) {
        dispatch({
          type: ParticipationFormActionTypes.FieldError,
          payload: {
            field: snakeToCamel(field) as keyof ParticipationFormFields,
            error: (error as Record<string, string[]>)[field][0],
          },
        });
      }

      return;
    }

    router.push('/form/success');
  };

  const canSubmit = (
    firstName.wasChanged && !firstName.error
    && lastName.wasChanged && !lastName.error
    && birthYear.wasChanged && !birthYear.error
    && city.wasChanged && !city.error
    && phoneNumber.wasChanged && !phoneNumber.error
    && email.wasChanged && !email.error
    && title.wasChanged && !title.error
    && year.wasChanged && !year.error
    && file.wasChanged && !file.error
  );

  return (
    <AppLayout>
      <SEO
        title="Подать пьесу"
      />
      <PlayProposalLayout>
        <PlayProposalLayout.Image>
          <Image
            src="/images/form/play-script.jpg"
            alt="Напечатанная читка в руках человека"
            layout="fill"
            objectFit="cover"
          />
        </PlayProposalLayout.Image>
        <PlayProposalLayout.Column>
          <PlayProposalTitle/>
          <PlayProposalLayout.Form>
            <ParticipationForm
              firstName={firstName.value}
              onFirstNameChange={handleFieldChange('firstName')}
              firstNameError={firstName.wasChanged ? firstName.error : undefined}
              lastName={lastName.value}
              onLastNameChange={handleFieldChange('lastName')}
              lastNameError={lastName.wasChanged ? lastName.error : undefined}
              birthYear={birthYear.value}
              onBirthYearChange={handleFieldChange('birthYear')}
              birthYearError={birthYear.wasChanged ? birthYear.error : undefined}
              city={city.value}
              cityError={city.wasChanged ? city.error : undefined}
              onCityChange={handleFieldChange('city')}
              phoneNumber={phoneNumber.value}
              onPhoneNumberChange={handleFieldChange('phoneNumber')}
              phoneNumberError={phoneNumber.wasChanged ? phoneNumber.error : undefined}
              email={email.value}
              onEmailChange={handleFieldChange('email')}
              emailError={email.wasChanged ? email.error : undefined}
              title={title.value}
              titleError={title.wasChanged ? title.error : undefined}
              onTitleChange={handleFieldChange('title')}
              year={year.value}
              yearError={year.wasChanged ? year.error : undefined}
              onYearChange={handleFieldChange('year')}
              fileName={file.value ? file.value.name : undefined}
              fileError={file.wasChanged ? file.error : undefined}
              onFileChange={handleFieldChange('file')}
              canSubmit={canSubmit}
              onSubmit={handleSubmit}
            />
          </PlayProposalLayout.Form>
        </PlayProposalLayout.Column>
      </PlayProposalLayout>
    </AppLayout>
  );
};

export default Participation;
