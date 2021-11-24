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

import playScript from '/public/images/contacts/play-script.jpg';

const Contacts: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
                  placeholder="Ваше имя"
                />
              </Form.Field>
              <Form.Field>
                <TextInput
                  placeholder="E-mail для ответа"
                />
              </Form.Field>
              <Form.Field>
                <TextArea
                  ariaLabel=""
                  placeholder="Текст сообщения"
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
