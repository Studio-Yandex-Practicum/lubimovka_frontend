import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Image from 'next/image';

import { fetcher } from 'shared/fetcher';
import AppLayout from 'components/app-layout';
import ContactsLayout from 'components/contacts-layout';
import ContactsForm from 'components/contacts-form';
import ContactsAuthors from 'components/contacts-authors';

import playScript from '/public/images/contacts/play-script.jpg';

const Contacts: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <AppLayout>
      <ContactsLayout>
        <ContactsLayout.Form>
          <ContactsForm privacy={data.url_privacy}/>
        </ContactsLayout.Form>
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
