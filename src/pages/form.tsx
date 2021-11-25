import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

import AppLayout from 'components/app-layout';
import PlayProposalLayout from 'components/play-proposal-layout';
import PlayProposalTitle from 'components/play-proposal-title';
import { ParticipationForm } from 'components/participation-form';
import {
  validIntegerRegexp,
  validYearRegexp,
  validEmailRegexp,
  validPhoneNumberRegexp,
} from 'shared/regexps';
import { Nullable } from 'shared/types';

const Participation: NextPage = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameWasChanged, setFirstNameWasChanged] = useState(false);
  const [lastName, setLastName] = useState('');
  const [lastNameWasChanged, setLastNameWasChanged] = useState(false);
  const [birthYear, setBirthYear] = useState('');
  const [birthYearWasChanged, setBirthYearWasChanged] = useState(false);
  const [city, setCity] = useState('');
  const [cityWasChanged, setCityWasChanged] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberWasChanged, setPhoneNumberWasChanged] = useState(false);
  const [email, setEmail] = useState('');
  const [emailWasChanged, setEmailWasChanged] = useState(false);
  const [playTitle, setPlayTitle] = useState('');
  const [playTitleWasChanged, setPlayTitleWasChanged] = useState(false);
  const [playYear, setPlayYear] = useState('');
  const [playYearWasChanged, setPlayYearWasChanged] = useState(false);
  const [playFile, setPlayFile] = useState<Nullable<File>>();
  const [playFileWasChanged, setPlayFileWasChanged] = useState(false);
  const [formSuccessfullySent, setFormSuccessfullySent] = useState(false);

  const getFirstNameError = () => {
    if (firstName.length < 2) {
      return 'Имя должно содержать минимум 2 символа';
    }

    return;
  };

  const getLastNameError = () => {
    if (lastName.length < 2) {
      return 'Фамилия должна содержать минимум 2 символа';
    }

    return;
  };

  const getBirthYearError = () => {
    if (!validYearRegexp.test(birthYear)) {
      return 'Неверный год рождения';
    }

    return;
  };

  const getCityError = () => {
    if (city.length < 2) {
      return 'Город должен содержать минимум 2 символа';
    }

    return;
  };

  const getPhoneNumberError = () => {
    if (!validPhoneNumberRegexp.test(phoneNumber)) {
      return 'Некорректный номер телефона';
    }

    return;
  };

  const getEmailError = () => {
    if (!email.length) {
      return 'Поле E-mail обязательно для заполнения';
    }

    if (!validEmailRegexp.test(email)) {
      return 'Неверный формат адреса электронной почты';
    }

    return;
  };

  const getPlayTitleError = () => {
    if (!playTitle.length) {
      return 'Название обязательно для заполнения';
    }

    return;
  };

  const getPlayYearError = () => {
    if (!validYearRegexp.test(playYear)) {
      return 'Неверный год';
    }

    return;
  };

  const getPlayFileError = () => {
    if (!playFile) {
      return 'Файл обязателен';
    }

    if (playFile && /[а-яА-ЯЁё]/.test(playFile?.name)) {
      return 'Файл содержит кириллицу, пожалуйста, переименуйте его.';
    }

    if (playFile && /[^A-Za-z._-]/.test(playFile?.name)) {
      return 'Пожалуйста, используйте только латинские символы и знаки - и _';
    }

    return;
  };

  const handleFirstNameChange = (value: string) => {
    setFirstNameWasChanged(true);
    setFirstName(value);
  };

  const handleLastNameChange = (value: string) => {
    setLastNameWasChanged(true);
    setLastName(value);
  };

  const handleBirthYearChange = (value: string) => {
    if (!validIntegerRegexp.test(value)) return;

    setBirthYearWasChanged(true);
    setBirthYear(value);
  };

  const handleCityChange = (value: string) => {
    setCityWasChanged(true);
    setCity(value);
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumberWasChanged(true);
    setPhoneNumber(value);
  };

  const handleEmailChange = (value: string) => {
    setEmailWasChanged(true);
    setEmail(value);
  };

  const handlePlayTitleChange = (value: string) => {
    setPlayTitleWasChanged(true);
    setPlayTitle(value);
  };

  const handlePlayYearChange = (value: string) => {
    if (!validIntegerRegexp.test(value)) return;

    setPlayYearWasChanged(true);
    setPlayYear(value);
  };

  const handlePlayFileChange = (file: Nullable<File>) => {
    setPlayFileWasChanged(true);
    setPlayFile(file);
  };

  const resetForm = () => {
    setFormSuccessfullySent(false);
    setFirstNameWasChanged(false);
    setFirstName('');
    setLastNameWasChanged(false);
    setLastName('');
    setBirthYearWasChanged(false);
    setBirthYear('');
    setCityWasChanged(false);
    setCity('');
    setPhoneNumberWasChanged(false);
    setPhoneNumber('');
    setEmailWasChanged(false);
    setEmail('');
    setPlayTitleWasChanged(false);
    setPlayTitle('');
    setPlayYearWasChanged(false);
    setPlayYear('');
    setPlayFileWasChanged(false);
    setPlayFile(undefined);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSuccessfullySent(true);
    setTimeout(() => resetForm(), 10000);
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
              firstName={firstName}
              onFirstNameChange={handleFirstNameChange}
              firstNameError={firstNameWasChanged ? getFirstNameError() : undefined}
              lastName={lastName}
              onLastNameChange={handleLastNameChange}
              lastNameError={lastNameWasChanged ? getLastNameError() : undefined}
              birthYear={birthYear}
              onBirthYearChange={handleBirthYearChange}
              birthYearError={birthYearWasChanged ? getBirthYearError() : undefined}
              city={city}
              cityError={cityWasChanged ? getCityError() : undefined}
              onCityChange={handleCityChange}
              phoneNumber={phoneNumber}
              onPhoneNumberChange={handlePhoneNumberChange}
              phoneNumberError={phoneNumberWasChanged ? getPhoneNumberError() : undefined}
              email={email}
              onEmailChange={handleEmailChange}
              emailError={emailWasChanged ? getEmailError() : undefined}
              playTitle={playTitle}
              playTitleError={playTitleWasChanged ? getPlayTitleError() : undefined}
              onPlayTitleChange={handlePlayTitleChange}
              playYear={playYear}
              playYearError={playYearWasChanged ? getPlayYearError() : undefined}
              onPlayYearChange={handlePlayYearChange}
              playFileName={playFile?.name}
              playFileError={playFileWasChanged ? getPlayFileError() : undefined}
              onPlayFileChange={handlePlayFileChange}
              canSubmit={canSubmit}
              onSubmit={handleSubmit}
              formSuccessfullySent={formSuccessfullySent}
            />
          </PlayProposalLayout.Form>
        </PlayProposalLayout.Column>
      </PlayProposalLayout>
    </AppLayout>
  );
};

export default Participation;
