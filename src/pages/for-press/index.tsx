import { NextPage } from 'next';
import Head from 'next/head';

import { AppLayout } from 'components/app-layout/index';
import { ForPressHero } from 'components/for-press-hero';
import { ForPressPressReleasesView } from 'components/for-press-press-releases-view';
import { pressReleases, forPressProps, prPerson } from '../../mocks/data/forPress';

const ForPress: NextPage = () => {
  return (
    <AppLayout>
      <Head>
        <title>{forPressProps.metaTitle}</title>
      </Head>
      <ForPressHero data={{
        forPressHeroTitle: {
          title: forPressProps.title,
        },
        forPressHeroDescription: {
          description: forPressProps.description,
          link: forPressProps.link,
        },
        prPerson: {
          name: prPerson.name,
          nameDative: prPerson.nameDative,
          email: prPerson.email,
          role: prPerson.role,
          photo: prPerson.photo,
        }
      }}/>
      <ForPressPressReleasesView defaultCover={pressReleases.defaultCover} pressReleases={pressReleases.pressReleases}/>
    </AppLayout>
  );
};

export default ForPress;
