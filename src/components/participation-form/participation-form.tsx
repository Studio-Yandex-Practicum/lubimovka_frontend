import Link from 'next/link';
import classNames from 'classnames/bind';

import Form from 'components/ui/form';
import { FormField } from 'components/form-field';
import TextInput from 'components/ui/text-input';
import { FileInput } from 'components/ui/file-input';
import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

import type { FC } from 'react';

import styles from './participation-form.module.css';

interface IParticipationFormProps {
  firstName: string
  firstNameError?: string
  onFirstNameChange: (value: string) => void
  lastName: string
  lastNameError?: string
  onLastNameChange: (value: string) => void
  birthYear: string
  birthYearError?: string
  onBirthYearChange: (value: string) => void
  city: string
  cityError?: string
  onCityChange: (value: string) => void
  phoneNumber: string
  phoneNumberError?: string
  onPhoneNumberChange: (value: string) => void
  email: string
  emailError?: string
  onEmailChange: (value: string) => void
  title: string
  titleError?: string
  onTitleChange: (value: string) => void
  year: string
  yearError?: string
  onYearChange: (value: string) => void
  fileName?: string
  fileError?: string
  onFileChange: (file: Nullable<File>) => void
  genericError?: string
  canSubmit: boolean
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  privacyPolicyUrl?: string
}

const ACCEPTABLE_FILE_TYPES = '.doc, .docx, .txt, .odt, .pdf';

const cx = classNames.bind(styles);

export const ParticipationForm: FC<IParticipationFormProps> = (props) => {
  const {
    firstName,
    firstNameError,
    onFirstNameChange,
    lastName,
    lastNameError,
    onLastNameChange,
    birthYear,
    birthYearError,
    onBirthYearChange,
    city,
    cityError,
    onCityChange,
    phoneNumber,
    phoneNumberError,
    onPhoneNumberChange,
    email,
    emailError,
    onEmailChange,
    title,
    titleError,
    onTitleChange,
    year,
    yearError,
    onYearChange,
    fileName,
    fileError,
    onFileChange,
    genericError,
    canSubmit,
    onSubmit,
    privacyPolicyUrl = '#',
  } = props;

  return (
    <Form onSubmit={onSubmit}>
      <Form.Fieldset legend="О вас">
        <Form.Field>
          <FormField
            caption="Имя"
            hiddenCaption
          >
            <TextInput
              value={firstName}
              placeholder="Имя"
              errorText={firstNameError}
              onChange={onFirstNameChange}
            />
          </FormField>
        </Form.Field>
        <Form.Field>
          <FormField
            caption="Фамилия"
            hiddenCaption
          >
            <TextInput
              value={lastName}
              placeholder="Фамилия"
              errorText={lastNameError}
              onChange={onLastNameChange}
            />
          </FormField>
        </Form.Field>
        <Form.Field>
          <FormField
            caption="Год рождения"
            hiddenCaption
          >
            <TextInput
              value={birthYear}
              placeholder="Год рождения"
              errorText={birthYearError}
              onChange={onBirthYearChange}
            />
          </FormField>
        </Form.Field>
        <Form.Field>
          <FormField
            caption="Город проживания"
            hiddenCaption
          >
            <TextInput
              value={city}
              placeholder="Город проживания"
              errorText={cityError}
              onChange={onCityChange}
            />
          </FormField>
        </Form.Field>
        <Form.Field>
          <FormField
            caption="Номер телефона"
            hiddenCaption
          >
            <TextInput
              type="tel"
              value={phoneNumber}
              placeholder="Номер телефона"
              errorText={phoneNumberError}
              onChange={onPhoneNumberChange}
            />
          </FormField>
        </Form.Field>
        <Form.Field>
          <FormField
            caption="E-mail"
            hiddenCaption
          >
            <TextInput
              value={email}
              placeholder="E-mail"
              errorText={emailError}
              onChange={onEmailChange}
            />
          </FormField>
        </Form.Field>
      </Form.Fieldset>
      <Form.Fieldset legend="О пьесе">
        <Form.Field>
          <FormField
            caption="Название пьесы"
            hiddenCaption
          >
            <TextInput
              value={title}
              placeholder="Название"
              errorText={titleError}
              onChange={onTitleChange}
            />
          </FormField>
        </Form.Field>
        <Form.Field>
          <FormField
            caption="Год написания пьесы"
            hiddenCaption
          >
            <TextInput
              value={year}
              placeholder="Год написания"
              errorText={yearError}
              onChange={onYearChange}
            />
          </FormField>
        </Form.Field>
        <Form.Field>
          <FormField
            caption="Файл пьесы"
            hiddenCaption
          >
            <FileInput
              accept={ACCEPTABLE_FILE_TYPES}
              fileName={fileName}
              errorText={fileError}
              onChange={onFileChange}
            />
          </FormField>
        </Form.Field>
        <p className={cx('note')}>
          Название файла должно содержать сначала фамилию автора, а затем название пьесы, например Chehov-Chaika.doc.
          Название файла с пьесой не должно содержать кириллические символы и пробелы. В названии файла должны быть только латинские символы и знаки - и _.
        </p>
      </Form.Fieldset>
      <Form.Actions>
        <Button
          type="submit"
          icon={(
            <Icon
              glyph="arrow-right"
              width="100%"
              height="100%"
            />
          )}
          iconPosition="right"
          size="l"
          border="full"
          upperCase
          fullWidth
          disabled={!canSubmit}
        >
          Отправить
        </Button>
      </Form.Actions>
      <Form.Disclaimer>
        Нажимая на кнопку «Отправить» вы даёте согласие
        {' '}
        <Link href={privacyPolicyUrl}>
          <a>
            на обработку персональных данных
          </a>
        </Link>
      </Form.Disclaimer>
      {genericError && (
        <Form.Error>
          {genericError}
        </Form.Error>
      )}
    </Form>
  );
};
