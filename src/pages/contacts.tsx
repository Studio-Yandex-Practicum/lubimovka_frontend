import { useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { fetcher } from 'shared/fetcher';
import AppLayout from 'components/app-layout';
import ContactsLayout from 'components/contacts-layout';
import ContactsTitle from 'components/contacts-title';
import ContactsAuthors from 'components/contacts-authors';
import Form from 'components/ui/form/form';
import TextInput from 'components/ui/text-input/text-input';
import TextArea from 'components/ui/text-area';
import { Button } from 'components/ui/button';
import { validEmailRegexp } from 'shared/regexps';

import playScript from '/public/images/contacts/play-script.jpg';

const Contacts: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [name, setName] = useState('');
  const [nameWasChanged, setNameWasChanged] = useState(false);
  const [email, setEmail] = useState('');
  const [emailWasChanged, setEmailWasChanged] = useState(false);
  const [question, setQuestion] = useState('');
  const [questionWasChanged, setQuestionWasChanged] = useState(false);

  const getNameError = () => {
    if (name.length < 2) {
      return 'Имя должно содержать минимум 2 символа';
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

  const getQuestionError = () => {
    if (!question.length) {
      return 'Поле обязательно для заполнения';
    }

    return;
  };

  const handleNameChange = (value: string) => {
    setNameWasChanged(true);
    setName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmailWasChanged(true);
    setEmail(value);
  };

  const handleQuestionChange = (value: string) => {
    setQuestionWasChanged(true);
    setQuestion(value);
  };

  return (
    <AppLayout>
      <ContactsLayout>
        <ContactsLayout.Column>
          <ContactsLayout.Title>
            <ContactsTitle id='contact'/>
          </ContactsLayout.Title>
          <ContactsLayout.Form>
            <Form aria-labelledby='contact'>
              <Form.Field>
                <TextInput
                  value={name}
                  placeholder="Ваше имя"
                  errorText={nameWasChanged ? getNameError() : undefined}
                  onChange={handleNameChange}
                />
              </Form.Field>
              <Form.Field>
                <TextInput
                  value={email}
                  placeholder="E-mail для ответа"
                  errorText={emailWasChanged ? getEmailError() : undefined}
                  onChange={handleEmailChange}
                />
              </Form.Field>
              <Form.Field>
                <TextArea
                  value={question}
                  placeholder="Текст сообщения"
                  errorText={questionWasChanged ? getQuestionError() : undefined}
                  onChange={handleQuestionChange}
                  rows={4}
                />
              </Form.Field>
              <Form.Actions>
                <Button
                  type="submit"
                  iconPlace="right"
                  icon="arrow-right"
                  size="l"
                  border="full"
                  label="Отправить"
                  align="space-between"
                  width="100%"
                />
              </Form.Actions>
              <Form.Disclaimer>
                {'Нажимая на кнопку «Отправить» вы даёте согласие '}
                <Link href={data.url_privacy}>
                  <a>на обработку персональных данных </a>
                </Link>
              </Form.Disclaimer>
            </Form>
          </ContactsLayout.Form>
        </ContactsLayout.Column>
        <ContactsLayout.Image>
          <Image
            src={playScript}
            alt="Напечатанная читка в руках человека"
            layout="fill"
            objectFit="cover"
          />
        </ContactsLayout.Image>
        <ContactsLayout.Authors>
          <ContactsAuthors email={data.email}/>
        </ContactsLayout.Authors>
      </ContactsLayout>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetcher('/contacts');

  return {
    props: {
      data,
    },
  };
};

export default Contacts;
