import { NextPage } from 'next';
import Image from 'next/image';

import AppLayout from 'components/app-layout';
import ContactsLayout from 'components/contacts-layout';
import ContactsForm from 'components/contacts-form';
import ContactsAuthors from 'components/contacts-authors';

import playScript from '/public/images/contacts/play-script.jpg';

const Contacts: NextPage = () => {
  return (
    <AppLayout>
      <ContactsLayout>
        <ContactsLayout.Form>
          <ContactsForm privacy='#'/>
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
          <ContactsAuthors email='hello@lubimovka.ru'/>
        </ContactsLayout.Authors>
      </ContactsLayout>
    </AppLayout>
  );
};

export default Contacts;
