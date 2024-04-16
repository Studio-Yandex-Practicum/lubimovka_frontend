import entries from 'lodash/entries';
import Error from 'next/error';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { AppLayout } from 'components/app-layout';
import { FormField } from 'components/form-field';
import PlayProposalLayout from 'components/play-proposal-layout';
import PlayProposalTitle from 'components/play-proposal-title';
import { SEO } from 'components/seo';
import { Button } from 'components/ui/button2';
import { Checkbox } from 'components/ui/checkbox';
import { FileInput } from 'components/ui/file-input';
import Form from 'components/ui/form';
import { Icon } from 'components/ui/icon';
import { PhoneNumberInput } from 'components/ui/phone-number-input';
import TextInput from 'components/ui/text-input';
import { postParticipation } from 'services/api/participation';
import { useSettings } from 'services/api/settings-adapter';
import { isHttpRequestError } from 'services/fetcher';
import {
  validEmailRegexp,
  validPhoneNumberRegexp,
  validYearRegexp,
} from 'shared/constants/regexps';
import { snakeToCamelCase } from 'shared/helpers/snake-to-camel-case';
import { useForm } from 'shared/hooks/use-form';

import type { ParticipationFormFields } from 'core/participation';
import type { ParticipationDTOFields,ParticipationErrorDTO } from 'services/api/participation';

const CURRENT_YEAR = new Date().getFullYear().toString();
const ACCEPTABLE_FILE_TYPES = '.doc, .docx, .txt, .odt, .pdf';

const initialFormValues: ParticipationFormFields = {
  firstName: '',
  lastName: '',
  birthYear: '',
  city: '',
  phoneNumber: '',
  email: '',
  nickname: '',
  anonym: false,
  title: '',
  year: '',
  file: null,
};

const errorMessage = {
  empty: 'Это поле не может быть пустым',
  minLengh: 'Это поле должно содержать минимум 2 символа',
  minLenghThree: 'Это поле должно содержать минимум 3 символа',
  maxLengthFifty: 'Это поле должно содержать максимум 50 символов',
  maxLengthTwoHundred: 'Это поле должно содержать максимум 200 символов',
  maxLengthSixty: 'Это поле должно содержать максимум 60 символов',
  maxLengthThirty: 'Это поле должно содержать максимум 30 символов',
  minYear: 'Убедитесь, что это значение больше либо равно 1900',
  maxYear: `Убедитесь, что это значение меньше либо равно ${CURRENT_YEAR}`,
  incorrectPhone: 'Некорректный номер телефона',
  incorrectEmail: 'Введите правильный адрес электронной почты',
  noFile: 'Файл обязателен',
  correctData: 'Неверный формат заполнения'
};

const regExp = /[^a-zа-яё]/gi;

const validate = (values: ParticipationFormFields) => {

  const errors = {} as Record<keyof ParticipationFormFields, string>;

  if (!values.firstName.length) {
    errors.firstName = errorMessage.empty;
  } else if (values.firstName.length < 2) {
    errors.firstName = errorMessage.minLengh;
  } else if (values.firstName.length > 50) {
    errors.firstName = errorMessage.maxLengthFifty;
  } else if (values.firstName.match(regExp)) {
    errors.firstName = errorMessage.correctData;
  }

  if (!values.lastName.length) {
    errors.lastName = errorMessage.empty;
  } else if (values.lastName.length < 2) {
    errors.lastName = errorMessage.minLengh;
  } else if (values.lastName.length > 50) {
    errors.lastName = errorMessage.maxLengthFifty;
  } else if (values.lastName.match(regExp)) {
    errors.lastName = errorMessage.correctData;
  }

  if (!values.birthYear.length) {
    errors.birthYear = errorMessage.empty;
  } else if (!validYearRegexp.test(values.birthYear)) {
    errors.birthYear = errorMessage.minYear;
  } else if (values.birthYear > CURRENT_YEAR) {
    errors.birthYear = errorMessage.maxYear;
  }

  if (!values.city.length) {
    errors.city = errorMessage.empty;
  } else if (values.city.length < 2) {
    errors.city = errorMessage.minLengh;
  } else if (values.city.length > 50) {
    errors.city = errorMessage.maxLengthFifty;
  } else if (values.city.match(regExp)) {
    errors.city = errorMessage.correctData;
  }

  if (!values.phoneNumber.length) {
    errors.phoneNumber = errorMessage.empty;
  } else if (!validPhoneNumberRegexp.test(values.phoneNumber)) {
    errors.phoneNumber = errorMessage.incorrectPhone;
  }

  if (!values.email.length) {
    errors.email = errorMessage.empty;
  } else if (!validEmailRegexp.test(values.email)) {
    errors.email = errorMessage.incorrectEmail;
  }

  if (!values.nickname.length && values.anonym) {
    errors.nickname = errorMessage.empty;
  } else if (values.nickname.length && values.nickname.length < 3) {
    errors.nickname = errorMessage.minLenghThree;
  } else if (values.nickname.length > 30) {
    errors.nickname = errorMessage.maxLengthThirty;
  } else if (values.nickname.match(regExp)) {
    errors.nickname = errorMessage.correctData;
  }

  if (!values.title.length) {
    errors.title = errorMessage.empty;
  } else if (values.title.length > 60) {
    errors.title = errorMessage.maxLengthSixty;
  } else if (values.title.length < 2) {
    errors.title = errorMessage.minLengh;
  } else if (values.title.match(regExp)) {
    errors.title = errorMessage.correctData;
  }

  if (!values.year.length) {
    errors.year = errorMessage.empty;
  } else if (!validYearRegexp.test(values.year)) {
    errors.year = errorMessage.minYear;
  } else if (values.year > CURRENT_YEAR) {
    errors.year = errorMessage.maxYear;
  }

  if (!values.file) {
    errors.file = errorMessage.noFile;
  }

  return errors;
};

const Participation = () => {
  const [errorOccurred, setErrorOccurred] = useState(false);
  const form = useForm<ParticipationFormFields>({
    initialValues: initialFormValues,
    validate: validate,
  });
  const { settings } = useSettings();

  const router = useRouter();

  const handleSubmitError = (error: unknown) => {
    if (isHttpRequestError<ParticipationErrorDTO>(error)) {
      if (error.response.statusCode === 400 && error.response.payload.non_field_errors) {
        const [errorMessage] = error.response.payload.non_field_errors;

        form.setNonFieldError(errorMessage);

        return;
      }

      if (error.response.statusCode === 400 && !error.response.payload.non_field_errors) {
        (entries(error.response.payload)).forEach(([field, [errorMessage]]) => {
          form.setFieldError(snakeToCamelCase(field as ParticipationDTOFields), errorMessage);
        });

        return;
      }

      if (error.response.statusCode === 403) {
        form.setNonFieldError(error.response.payload.detail);

        return;
      }
    }

    setErrorOccurred(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }
    try {
      await postParticipation(form.values);
      router.push('/form/success');
    } catch (error) {
      handleSubmitError(error);

      return;
    }
  };

  const canSubmit = !form.nonFieldError
    && (Object.keys(form.values) as Array<keyof ParticipationFormFields>)
      .every((field) => !form.errors[field]);

  if (errorOccurred) {
    return (
      <Error statusCode={500}/>
    );
  }

  const handleInput = (
    input: keyof ParticipationFormFields,
    value: ParticipationFormFields[keyof ParticipationFormFields]
  ) => {
    return input === 'phoneNumber'
      ? form.setFieldValue(input, '+7' + value)
      : form.setFieldValue(input, value);
  };

  return (
    <AppLayout>
      <SEO
        title="Подать пьесу"
      />
      <PlayProposalLayout>
        <PlayProposalLayout.Column>
          <PlayProposalTitle/>
          <PlayProposalLayout.Form>
            <Form onSubmit={handleSubmit}>
              <Form.Fieldset legend="О вас">
                <Form.Field>
                  <FormField
                    caption="Имя"
                    hiddenCaption
                  >
                    <TextInput
                      value={form.values.firstName}
                      placeholder="Имя"
                      errorText={form.touched.firstName ? form.errors.firstName : ''}
                      onChange={(value) => handleInput('firstName', value)}
                    />
                  </FormField>
                </Form.Field>
                <Form.Field>
                  <FormField
                    caption="Фамилия"
                    hiddenCaption
                  >
                    <TextInput
                      value={form.values.lastName}
                      placeholder="Фамилия"
                      errorText={form.touched.lastName ? form.errors.lastName : ''}
                      onChange={(value) => handleInput('lastName', value)}
                    />
                  </FormField>
                </Form.Field>
                <Form.Field>
                  <FormField
                    caption="Год рождения"
                    hiddenCaption
                  >
                    <TextInput
                      value={form.values.birthYear}
                      placeholder="Год рождения"
                      mask="9999"
                      errorText={form.touched.birthYear ? form.errors.birthYear : ''}
                      onChange={(value) => handleInput('birthYear', value)}
                    />
                  </FormField>
                </Form.Field>
                <Form.Field>
                  <FormField
                    caption="Город проживания"
                    hiddenCaption
                  >
                    <TextInput
                      value={form.values.city}
                      placeholder="Город проживания"
                      errorText={form.touched.city ? form.errors.city : ''}
                      onChange={(value) => handleInput('city', value)}
                    />
                  </FormField>
                </Form.Field>
                <Form.Field>
                  <FormField
                    caption="Номер телефона"
                    hiddenCaption
                  >
                    <PhoneNumberInput
                      value={form.values.phoneNumber}
                      errorText={form.touched.phoneNumber ? form.errors.phoneNumber : ''}
                      onChange={(value) => handleInput('phoneNumber', value)}
                    />
                  </FormField>
                </Form.Field>
                <Form.Field>
                  <FormField
                    caption="E-mail"
                    hiddenCaption
                  >
                    <TextInput
                      type="email"
                      value={form.values.email}
                      placeholder="E-mail"
                      errorText={form.touched.email ? form.errors.email : ''}
                      onChange={(value) => handleInput('email', value)}
                    />
                  </FormField>
                </Form.Field>
                {form.values.anonym
                && (
                  <Form.Field>
                    <FormField
                      caption="Псевдоним"
                      hiddenCaption
                    >
                      <TextInput
                        value={form.values.nickname}
                        placeholder="Псевдоним"
                        errorText={form.touched.nickname ? form.errors.nickname : ''}
                        onChange={(value) => handleInput('nickname', value)}
                      />
                    </FormField>
                  </Form.Field>
                )
                }
                <Form.Field>
                  <FormField
                    caption="Хочу сохранить анонимность"
                    hiddenCaption
                  >
                    <Checkbox
                      checked={form.values.anonym}
                      onChange={(value) => handleInput('anonym', value)}
                    >
                      Хочу сохранить анонимность
                    </Checkbox>
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
                      value={form.values.title}
                      placeholder="Название"
                      errorText={form.touched.title ? form.errors.title : ''}
                      onChange={(value) => handleInput('title', value)}
                    />
                  </FormField>
                </Form.Field>
                <Form.Field>
                  <FormField
                    caption="Год написания пьесы"
                    hiddenCaption
                  >
                    <TextInput
                      value={form.values.year}
                      placeholder="Год написания"
                      mask="9999"
                      errorText={form.touched.year ? form.errors.year : ''}
                      onChange={(value) => handleInput('year', value)}
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
                      fileName={form.values.file?.name}
                      errorText={form.touched.file ? form.errors.file : ''}
                      onChange={(value) => handleInput('file', value)}
                    />
                  </FormField>
                </Form.Field>
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
                <Link href={settings?.privacyPolicyUrl ?? '#'}>
                  <a>
                    на обработку персональных данных
                  </a>
                </Link>
              </Form.Disclaimer>
              {form.nonFieldError && (
                <Form.Error>
                  {form.nonFieldError}
                </Form.Error>
              )}
            </Form>
          </PlayProposalLayout.Form>
        </PlayProposalLayout.Column>
      </PlayProposalLayout>
    </AppLayout>
  );
};

export default Participation;
