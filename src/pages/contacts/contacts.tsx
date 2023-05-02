import Link from 'next/link';
import { useEffect, useState } from 'react';

import { AppLayout } from 'components/app-layout';
import { CallToEmail } from 'components/call-to-email';
import ContactsLayout from 'components/contacts-layout';
import ContactsTitle from 'components/contacts-title';
import { SEO } from 'components/seo';
import { Button } from 'components/ui/button2';
import Form from 'components/ui/form/form';
import { Icon } from 'components/ui/icon';
import TextArea from 'components/ui/text-area';
import TextInput from 'components/ui/text-input/text-input';
import { validEmailRegexp } from 'shared/constants/regexps';

import { postQuestions } from '../../services/api/questions';
import { useSettings } from '../../services/api/settings-adapter';
import { isHttpRequestError } from '../../services/fetcher';
import { useForm } from '../../shared/hooks/use-form';

import type { questionsFormFields } from '../../core/questions';
import type { QuestionsErrorDTO } from '../../services/api/questions';
import type { NextPage } from 'next';

const CONTACT_FORM_RESET_TIMEOUT = 10000;

const initialFormValues: questionsFormFields = {
  name:'',
  email:'',
  message:''
};
const validate = (values: questionsFormFields) => {
  const errors = {} as Record<keyof questionsFormFields, string>;

  if (!values.name.length) {
    errors.name = 'Это поле не может быть пустым';
  } else if (values.name.length < 2) {
    errors.name = 'Имя должно состоять более чем из 2 символов';
  } if (values.name.length > 50) {
    errors.name = 'Имя должно состоять менее чем из 50 символов';
  }

  if (!values.email.length) {
    errors.email = 'Это поле не может быть пустым';
  } else if (!validEmailRegexp.test(values.email)) {
    errors.email = 'Введите правильный адрес электронной почты';
  }

  if (!values.message.length) {
    errors.message = 'Это поле не может быть пустым';
  } else if (values.message.length < 2) {
    errors.message = 'Вопрос должен состоять более чем из 2 символов';
  } if (values.message.length > 500) {
    errors.message = 'Вопрос должен состоять менее чем из 500 символов';
  }

  return errors;
};

const Contacts: NextPage = () => {
  const [formSuccessfullySent, setFormSuccessfullySent] = useState(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const { settings } = useSettings();

  const form = useForm<questionsFormFields>({
    initialValues:initialFormValues,
    validate: validate
  });

  const resetContactForm = () => {
    form.resetForm();
    setFormSuccessfullySent(false);
  };

  const handleSubmitError = (error: unknown) => {
    if (isHttpRequestError<QuestionsErrorDTO>(error)) {
      if (error.response.statusCode === 400 && error.response.payload.non_field_errors) {
        const [errorMessage] = error.response.payload.non_field_errors;
        form.setNonFieldError(errorMessage);

        return;
      }

      if (error.response.statusCode === 403) {
        form.setNonFieldError(error.response.payload.detail);

        return;
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await postQuestions(form.values);
    } catch (error) {
      handleSubmitError(error);

      return;
    }

    setFormSuccessfullySent(true);
    setTimeout(() => resetContactForm(), CONTACT_FORM_RESET_TIMEOUT);
  };

  useEffect(() => {
    const formReady = form.getReadyStatus();
    formReady ? setCanSubmit(true) : setCanSubmit(false);
  },[formSuccessfullySent, form]);

  return (
    <AppLayout>
      <SEO
        title="Контакты"
      />
      <ContactsLayout>
        <ContactsLayout.Column>
          <ContactsLayout.Title>
            <ContactsTitle id="contact"/>
          </ContactsLayout.Title>
          <ContactsLayout.Form>
            <Form aria-labelledby="contact" onSubmit={handleSubmit}>
              <Form.Field>
                <TextInput
                  value={form.values.name}
                  placeholder="Ваше имя"
                  errorText={form.touched.name ? form.errors.name : ''}
                  onChange={(value) => form.setFieldValue('name', value)}
                />
              </Form.Field>
              <Form.Field>
                <TextInput
                  value={form.values.email}
                  placeholder="E-mail для ответа"
                  errorText={form.touched.email ? form.errors.email : ''}
                  onChange={(value) => form.setFieldValue('email', value)}
                />
              </Form.Field>
              <Form.Field>
                <TextArea
                  value={form.values.message}
                  placeholder="Текст сообщения"
                  errorText={form.touched.message ? form.errors.message : ''}
                  onChange={(value) => form.setFieldValue('message', value)}
                  rows={4}
                />
              </Form.Field>
              <Form.Actions>
                <Button
                  size="l"
                  type="submit"
                  icon={(
                    <Icon
                      glyph={formSuccessfullySent ? 'ok' : 'arrow-right'}
                      width="100%"
                      height="100%"
                    />
                  )}
                  iconPosition="right"
                  border="full"
                  disabled={!canSubmit}
                  upperCase
                  fullWidth
                >
                  {formSuccessfullySent ? 'Отправлено' : 'Отправить'}
                </Button>
              </Form.Actions>
              <Form.Disclaimer>
                {'Нажимая на кнопку «Отправить» вы даёте согласие '}
                <Link href={settings?.privacyPolicyUrl ?? '#'}>
                  <a>
                    на обработку персональных данных
                  </a>
                </Link>
              </Form.Disclaimer>
            </Form>
          </ContactsLayout.Form>
        </ContactsLayout.Column>
        <ContactsLayout.Column>
          {settings?.emailAddresses.forPlayAuthors && (
            <ContactsLayout.CallToEmail>
              <CallToEmail
                type="contacts"
                title="Для авторов"
                description="Если вы хотите внести изменения в свою страницу: добавить пьесы, ссылки на статьи или публикации, напишите нам. Приложите файлы и ссылки."
                email={settings.emailAddresses.forPlayAuthors}
              />
            </ContactsLayout.CallToEmail>
          )}
        </ContactsLayout.Column>
      </ContactsLayout>
    </AppLayout>
  );
};

export default Contacts;
