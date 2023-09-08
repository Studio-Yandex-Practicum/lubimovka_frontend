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
  title: '',
  year: '',
  file: null,
};

const validate = (values: ParticipationFormFields) => {
  const errors = {} as Record<keyof ParticipationFormFields, string>;

  if (!values.firstName.length) {
    errors.firstName = 'Это поле не может быть пустым';
  } else if (values.firstName.length < 2) {
    errors.firstName = 'Имя должно состоять более чем из 2 символов';
  } if (values.firstName.length > 50) {
    errors.firstName = 'Имя должно состоять менее чем из 50 символов';
  }

  if (!values.lastName.length) {
    errors.lastName = 'Это поле не может быть пустым';
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Фамилия должна содержать минимум 2 символа';
  } else if (values.lastName.length > 50) {
    errors.lastName = 'Фамилия должна состоять менее чем из 50 символов';
  }

  if (!values.birthYear.length) {
    errors.birthYear = 'Это поле не может быть пустым';
  } else if (!validYearRegexp.test(values.birthYear)) {
    errors.birthYear = 'Убедитесь, что это значение больше либо равно 1900';
  } else if (values.birthYear > CURRENT_YEAR) {
    errors.birthYear = `Убедитесь, что это значение меньше либо равно ${CURRENT_YEAR}`;
  }

  if (!values.city.length) {
    errors.city = 'Это поле не может быть пустым';
  } else if (values.city.length < 2) {
    errors.city = 'Город должен содержать минимум 2 символа';
  } else if (values.city.length > 50) {
    errors.city = 'Город должен состоять менее чем из 50 символов';
  }

  if (!values.phoneNumber.length) {
    errors.phoneNumber = 'Это поле не может быть пустым';
  } else if (!validPhoneNumberRegexp.test(values.phoneNumber)) {
    errors.phoneNumber = 'Некорректный номер телефона';
  }

  if (!values.email.length) {
    errors.email = 'Это поле не может быть пустым';
  } else if (!validEmailRegexp.test(values.email)) {
    errors.email = 'Введите правильный адрес электронной почты';
  }

  if (!values.title.length) {
    errors.title = 'Это поле не может быть пустым';
  } else if (values.title.length > 200) {
    errors.title = 'Название пьесы должно состоять менее чем из 200 символов';
  }

  if (!values.year.length) {
    errors.year = 'Это поле не может быть пустым';
  } else if (!validYearRegexp.test(values.year)) {
    errors.year = 'Убедитесь, что это значение больше либо равно 1900';
  } else if (values.year > CURRENT_YEAR) {
    errors.year = `Убедитесь, что это значение меньше либо равно ${CURRENT_YEAR}`;
  }

  if (!values.file) {
    errors.file = 'Файл обязателен';
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

    try {
      await postParticipation(form.values);
    } catch (error) {
      handleSubmitError(error);

      return;
    }

    router.push('/form/success');
  };

  const canSubmit = !form.nonFieldError
    && (Object.keys(form.values) as Array<keyof ParticipationFormFields>)
      .every((field) => form.touched[field] && !form.errors[field]);

  if (errorOccurred) {
    return (
      <Error statusCode={500}/>
    );
  }

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
                      onChange={(value) => form.setFieldValue('firstName', value)}
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
                      onChange={(value) => form.setFieldValue('lastName', value)}
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
                      onChange={(value) => form.setFieldValue('birthYear', value)}
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
                      onChange={(value) => form.setFieldValue('city', value)}
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
                      onChange={(value) => form.setFieldValue('email', value)}
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
                      value={form.values.title}
                      placeholder="Название"
                      errorText={form.touched.title ? form.errors.title : ''}
                      onChange={(value) => form.setFieldValue('title', value)}
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
                      onChange={(value) => form.setFieldValue('year', value)}
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
                      onChange={(value) => form.setFieldValue('file', value)}
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
