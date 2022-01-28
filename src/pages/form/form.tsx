import { useReducer } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { AppLayout } from 'components/app-layout';
import PlayProposalLayout from 'components/play-proposal-layout';
import PlayProposalTitle from 'components/play-proposal-title';
import { ParticipationForm } from 'components/participation-form';
import {
  validYearRegexp,
  validEmailRegexp,
  validPhoneNumberRegexp,
} from 'shared/constants/regexps';
import { Nullable } from 'shared/types';
import { fetcher } from 'shared/fetcher';

interface ParticipationFormFields {
  firstName: string,
  lastName: string,
  birthYear: string,
  city: string,
  phoneNumber: string,
  email: string,
  playTitle: string,
  playYear: string,
  playFile: Nullable<File>,
}

enum ParticipationFormActionTypes {
  FieldChange,
  Reset,
}

type ParticipationFormAction<K extends keyof ParticipationFormFields = keyof ParticipationFormFields> =
  | { type: ParticipationFormActionTypes.FieldChange, payload: { field: K, value: ParticipationFormFields[K] } }
  | { type: ParticipationFormActionTypes.Reset }

type ParticipationFormStateFields<T> = {
  [K in keyof T]: {
    value: T[K],
    wasChanged: boolean,
  }
}

type ParticipationFormState = ParticipationFormStateFields<ParticipationFormFields>

const initialParticipationFormState: ParticipationFormState = {
  firstName: { value: '', wasChanged: false },
  lastName: { value: '', wasChanged: false },
  birthYear: { value: '', wasChanged: false },
  city: { value: '', wasChanged: false },
  phoneNumber: { value: '', wasChanged: false },
  email: { value: '', wasChanged: false },
  playTitle: { value: '', wasChanged: false },
  playYear: { value: '', wasChanged: false },
  playFile: { value: null, wasChanged: false },
};

const participationFormReducer = (state: ParticipationFormState, action: ParticipationFormAction) => {
  switch (action.type) {
  case ParticipationFormActionTypes.FieldChange:
    return {
      ...state,
      [action.payload.field]: {
        value: action.payload.value,
        wasChanged: true,
      },
    };
  case ParticipationFormActionTypes.Reset:
    return initialParticipationFormState;
  default:
    return state;
  }
};

const Participation: NextPage = () => {
  const [formState, dispatch] = useReducer(participationFormReducer, initialParticipationFormState);

  const {
    firstName,
    lastName,
    birthYear,
    city,
    phoneNumber,
    email,
    playTitle,
    playYear,
    playFile,
  } = formState;

  const router = useRouter();

  const getFirstNameError = () => {
    if (firstName.value.length < 2) {
      return 'Имя должно содержать минимум 2 символа';
    }

    return;
  };

  const getLastNameError = () => {
    if (lastName.value.length < 2) {
      return 'Фамилия должна содержать минимум 2 символа';
    }

    return;
  };

  const getBirthYearError = () => {
    if (!validYearRegexp.test(birthYear.value)) {
      return 'Неверный год рождения';
    }

    return;
  };

  const getCityError = () => {
    if (city.value.length < 2) {
      return 'Город должен содержать минимум 2 символа';
    }

    return;
  };

  const getPhoneNumberError = () => {
    if (!validPhoneNumberRegexp.test(phoneNumber.value)) {
      return 'Некорректный номер телефона';
    }

    return;
  };

  const getEmailError = () => {
    if (!email.value.length) {
      return 'Поле E-mail обязательно для заполнения';
    }

    if (!validEmailRegexp.test(email.value)) {
      return 'Неверный формат адреса электронной почты';
    }

    return;
  };

  const getPlayTitleError = () => {
    if (!playTitle.value.length) {
      return 'Название обязательно для заполнения';
    }

    return;
  };

  const getPlayYearError = () => {
    if (!validYearRegexp.test(playYear.value)) {
      return 'Неверный год';
    }

    return;
  };

  const getPlayFileError = () => {
    if (!playFile.value) {
      return 'Файл обязателен';
    }

    if (playFile.value && /[а-яА-ЯЁё]/.test(playFile.value.name)) {
      return 'Файл содержит кириллицу, пожалуйста, переименуйте его.';
    }

    if (playFile.value && /[^A-Za-z._-]/.test(playFile.value.name)) {
      return 'Пожалуйста, используйте только латинские символы и знаки - и _';
    }

    return;
  };

  const handleFieldChange = (field: keyof ParticipationFormState) => (value: ParticipationFormFields[typeof field]) => {
    dispatch({
      type: ParticipationFormActionTypes.FieldChange,
      payload: {
        field,
        value,
      },
    });
  };

  const canSubmit = (
    !getFirstNameError()
    && !getLastNameError()
    && !getBirthYearError()
    && !getCityError()
    && !getPhoneNumberError()
    && !getEmailError()
    && !getPlayTitleError()
    && !getPlayYearError()
    && !getPlayFileError()
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData();

    data.append('birth_year', birthYear.value);
    data.append('first_name', firstName.value);
    data.append('last_name', lastName.value);
    data.append('city', city.value);
    data.append('phone_number', phoneNumber.value);
    data.append('email', email.value);
    data.append('title', playTitle.value);
    data.append('year', playYear.value);
    data.append('file', playFile.value!);

    try {
      fetcher('/library/participation/', {
        method: 'POST',
        body: data,
      });
    } catch (error) {
      return;
    }

    router.push('/form/success');
  };

  return (
    <AppLayout>
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
              firstNameError={firstName.wasChanged ? getFirstNameError() : undefined}
              lastName={lastName.value}
              onLastNameChange={handleFieldChange('lastName')}
              lastNameError={lastName.wasChanged ? getLastNameError() : undefined}
              birthYear={birthYear.value}
              onBirthYearChange={handleFieldChange('birthYear')}
              birthYearError={birthYear.wasChanged ? getBirthYearError() : undefined}
              city={city.value}
              cityError={city.wasChanged ? getCityError() : undefined}
              onCityChange={handleFieldChange('city')}
              phoneNumber={phoneNumber.value}
              onPhoneNumberChange={handleFieldChange('phoneNumber')}
              phoneNumberError={phoneNumber.wasChanged ? getPhoneNumberError() : undefined}
              email={email.value}
              onEmailChange={handleFieldChange('email')}
              emailError={email.wasChanged ? getEmailError() : undefined}
              playTitle={playTitle.value}
              playTitleError={playTitle.wasChanged ? getPlayTitleError() : undefined}
              onPlayTitleChange={handleFieldChange('playTitle')}
              playYear={playYear.value}
              playYearError={playYear.wasChanged ? getPlayYearError() : undefined}
              onPlayYearChange={handleFieldChange('playYear')}
              playFileName={playFile.value ? playFile.value.name : undefined}
              playFileError={playFile.wasChanged ? getPlayFileError() : undefined}
              onPlayFileChange={handleFieldChange('playFile')}
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
