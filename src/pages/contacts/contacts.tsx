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
import { validEmailRegexp } from 'shared/constants/regexps';

enum ActionTypes {
  FieldChange,
  Reset,
}

type Action =
  { type: ActionTypes.FieldChange, payload: { name: string, value: string } }
  | { type: ActionTypes.Reset }

const initialFormState = {
  name: { value: '', wasChanged: false },
  email: { value: '', wasChanged: false },
  question: { value: '', wasChanged: false },
};

const formReducer = (state: typeof initialFormState, action: Action) => {
  switch (action.type) {
  case ActionTypes.FieldChange:
    return {
      ...state,
      [action.payload.name]: {
        value: action.payload.value,
        wasChanged: true,
      },
    };
  case ActionTypes.Reset:
    return initialFormState;
  default:
    return state;
  }
};

const Contacts: NextPage = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [formSuccessfullySent, setFormSuccessfullySent] = useState(false);

  const {
    name,
    email,
    question
  } = formState;

  const getNameError = () => {
    if (name.value.length < 2) {
      return 'Имя должно содержать минимум 2 символа';
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

  const getQuestionError = () => {
    if (!question.value.length) {
      return 'Поле обязательно для заполнения';
    }

    return;
  };

  const handleFieldChange = (name: keyof typeof initialFormState) => (value: string) => {
    dispatch({
      type: ActionTypes.FieldChange,
      payload: {
        name,
        value
      },
    });
  };

  const resetForm = () => {
    dispatch({
      type: ActionTypes.Reset,
    });
    setFormSuccessfullySent(false);
  };

  const canSubmit = !getEmailError() && !getEmailError() && !getQuestionError();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSuccessfullySent(true);
    setTimeout(() => resetForm(), 10000);
  };

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
                  errorText={name.wasChanged ? getNameError() : undefined}
                  onChange={handleFieldChange('name')}
                />
              </Form.Field>
              <Form.Field>
                <TextInput
                  value={email.value}
                  placeholder="E-mail для ответа"
                  errorText={email.wasChanged ? getEmailError() : undefined}
                  onChange={handleFieldChange('email')}
                />
              </Form.Field>
              <Form.Field>
                <TextArea
                  value={question.value}
                  placeholder="Текст сообщения"
                  errorText={question.wasChanged ? getQuestionError() : undefined}
                  onChange={handleFieldChange('question')}
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
