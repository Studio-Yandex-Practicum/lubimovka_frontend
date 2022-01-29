import { useReducer, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { AppLayout } from 'components/app-layout';
import ContactsLayout from 'components/contacts-layout';
import ContactsTitle from 'components/contacts-title';
import ContactsAuthors from 'components/contacts-authors';
import Form from 'components/ui/form/form';
import TextInput from 'components/ui/text-input/text-input';
import TextArea from 'components/ui/text-area';
import { Button } from 'components/ui/button';
import { fetcher } from 'shared/fetcher';
import { validEmailRegexp } from 'shared/constants/regexps';

interface ContactFormFields {
  name: string,
  email: string,
  message: string,
}

enum ContactFormActionTypes {
  FieldChange,
  FieldError,
  Reset,
}

type ContactFormAction<K extends keyof ContactFormFields = keyof ContactFormFields> =
  { type: ContactFormActionTypes.FieldChange, payload: { field: K, value: ContactFormFields[K], error?: string } }
  | { type: ContactFormActionTypes.FieldError, payload: { field: K, error: string } }
  | { type: ContactFormActionTypes.Reset }

type ContactFormStateFields<T> = {
  [K in keyof T]: {
    value: T[K],
    wasChanged: boolean,
    error?: string,
  }
}

type ContactFormState = ContactFormStateFields<ContactFormFields>

const CONTACT_FORM_RESET_TIMEOUT = 10000;

const initialContactFormState: ContactFormState = {
  name: { value: '', wasChanged: false },
  email: { value: '', wasChanged: false },
  message: { value: '', wasChanged: false },
};

const contactFormReducer = (state: ContactFormState, action: ContactFormAction) => {
  switch (action.type) {
  case ContactFormActionTypes.FieldChange:
    return {
      ...state,
      [action.payload.field]: {
        value: action.payload.value,
        wasChanged: true,
        error: action.payload.error,
      },
    };
  case ContactFormActionTypes.FieldError:
    return {
      ...state,
      [action.payload.field]: {
        ...state[action.payload.field],
        error: action.payload.error,
      },
    };
  case ContactFormActionTypes.Reset:
    return initialContactFormState;
  default:
    return state;
  }
};

const Contacts: NextPage = () => {
  const [contactFormState, dispatch] = useReducer(contactFormReducer, initialContactFormState);
  const [formSuccessfullySent, setFormSuccessfullySent] = useState(false);

  const {
    name,
    email,
    message,
  } = contactFormState;

  const getFieldError = <K extends keyof ContactFormFields>(field: K, value: ContactFormFields[K]) => {
    switch (field) {
    case 'name':
      if (!value.length) {
        return 'Это поле не может быть пустым';
      }
      if (value.length < 2) {
        return 'Имя должно состоять более чем из 2 символов';
      }
      if (value.length > 50) {
        return 'Имя должно состоять менее чем из 50 символов';
      }
      break;
    case 'email':
      if (!value.length) {
        return 'Это поле не может быть пустым';
      }

      if (!validEmailRegexp.test(value)) {
        return 'Введите правильный адрес электронной почты';
      }
      break;
    case 'message':
      if (!value.length) {
        return 'Это поле не может быть пустым';
      }
      if (value.length < 2) {
        return 'Вопрос должен состоять более чем из 2 символов';
      }
      if (value.length > 500) {
        return 'Вопрос должен состоять менее чем из 500 символов';
      }
      break;
    default:
      return;
    }
  };

  const handleFieldChange = <K extends keyof ContactFormFields>(field: K) => (value: ContactFormFields[K]) => {
    dispatch({
      type: ContactFormActionTypes.FieldChange,
      payload: {
        field,
        value,
        error: getFieldError(field, value),
      },
    });
  };

  const resetContactForm = () => {
    dispatch({
      type: ContactFormActionTypes.Reset,
    });
    setFormSuccessfullySent(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      author_name: name.value,
      author_email: email.value,
      question: message.value,
    };

    try {
      await fetcher('/info/questions/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      // TODO: добавить проверку типов выброшенного исключения, пока считаем, что всегда получаем ответ API

      for (let field in error as Record<string, string[]>) {
        dispatch({
          type: ContactFormActionTypes.FieldError,
          payload: {
            field: {
              author_name: 'name',
              author_email: 'email',
              question: 'message',
            }[field] as keyof ContactFormFields,
            error: (error as Record<string, string[]>)[field][0],
          },
        });
      }

      return;
    }

    setFormSuccessfullySent(true);
    setTimeout(() => resetContactForm(), CONTACT_FORM_RESET_TIMEOUT);
  };

  const canSubmit =
    name.wasChanged && !name.error
    && email.wasChanged && !email.error
    && message.wasChanged && !message.error;

  return (
    <AppLayout>
      <ContactsLayout>
        <ContactsLayout.Column>
          <ContactsLayout.Title>
            <ContactsTitle id="contact"/>
          </ContactsLayout.Title>
          <ContactsLayout.Form>
            <Form aria-labelledby="contact" onSubmit={handleSubmit}>
              <Form.Field>
                <TextInput
                  value={name.value}
                  placeholder="Ваше имя"
                  errorText={name.wasChanged ? name.error : undefined}
                  onChange={handleFieldChange('name')}
                />
              </Form.Field>
              <Form.Field>
                <TextInput
                  value={email.value}
                  placeholder="E-mail для ответа"
                  errorText={email.wasChanged ? email.error : undefined}
                  onChange={handleFieldChange('email')}
                />
              </Form.Field>
              <Form.Field>
                <TextArea
                  value={message.value}
                  placeholder="Текст сообщения"
                  errorText={message.wasChanged ? message.error : undefined}
                  onChange={handleFieldChange('message')}
                  rows={4}
                />
              </Form.Field>
              <Form.Actions>
                <Button
                  type="submit"
                  iconPlace="right"
                  icon={formSuccessfullySent ? 'ok' : 'arrow-right'}
                  size="l"
                  border="full"
                  label={formSuccessfullySent ? 'Отправлено' : 'Отправить'}
                  align="space-between"
                  width="100%"
                  disabled={!canSubmit}
                />
              </Form.Actions>
              <Form.Disclaimer>
                {'Нажимая на кнопку «Отправить» вы даёте согласие'}
                <Link href="/privacy-policy">
                  <a>на обработку персональных данных </a>
                </Link>
              </Form.Disclaimer>
            </Form>
          </ContactsLayout.Form>
        </ContactsLayout.Column>
        <ContactsLayout.Image>
          <Image
            src="/images/contacts/play-script.jpg"
            alt="Напечатанная читка в руках человека"
            layout="fill"
            objectFit="cover"
          />
        </ContactsLayout.Image>
        <ContactsLayout.Authors>
          <ContactsAuthors email="hello@lubimovka.ru"/>
        </ContactsLayout.Authors>
      </ContactsLayout>
    </AppLayout>
  );
};

export default Contacts;
