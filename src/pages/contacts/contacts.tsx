import Link from 'next/link';
import { useState } from 'react';

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
import { fetcher } from 'services/fetcher';
import { validEmailRegexp } from 'shared/constants/regexps';

import { useSettings } from '../../services/api/settings-adapter';
import { useForm } from '../../shared/hooks/use-form';

import type { NextPage } from 'next';

const CONTACT_FORM_RESET_TIMEOUT = 10000;

type ContactFormFields = {
  name:string
  email:string
  message:string
}
const initialFormValues: ContactFormFields = {
  name:'',
  email:'',
  message:''
};
const validate = (values: ContactFormFields) => {
  const errors = {} as Record<keyof ContactFormFields, string>;

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
  } if (values.message.length > 50) {
    errors.message = 'Вопрос должен состоять менее чем из 500 символов';
  }

  return errors;
};

const Contacts: NextPage = () => {
  const [formSuccessfullySent, setFormSuccessfullySent] = useState(false);
  const { settings } = useSettings();

  const form = useForm<ContactFormFields>({
    initialValues:initialFormValues,
    validate: validate
  });

  const resetContactForm = () => {
    setFormSuccessfullySent(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data= {
      author_name: form.values.name,
      author_email: form.values.email,
      question: form.values.message,
    };
    try {
      await fetcher('/feedback/questions/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
      });
    } catch ([status, errors]) {
      // TODO: добавить проверку типов выброшенного исключения, пока считаем, что всегда получаем ответ API

      return;
    }

    setFormSuccessfullySent(true);
    setTimeout(() => resetContactForm(), CONTACT_FORM_RESET_TIMEOUT);
  };

  const canSubmit:boolean = !form.nonFieldError && (Object.keys(form.values) as Array<keyof ContactFormFields>)
    .every((field:keyof ContactFormFields) => form.touched[field] && !form.errors[field]);

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
