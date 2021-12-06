import { NextPage } from 'next';
import Head from 'next/head';

import { AppLayout } from 'components/app-layout/index';
import { ForPressHero } from 'components/for-press-hero';
import { ForPressPressReleasesView } from 'components/for-press-press-releases-view';
import data from './assets/mock-data.json';

interface IForPressProps {
  metaTitle: string;
}

const ForPress: NextPage<IForPressProps> = (props: IForPressProps) => {
  const { metaTitle } = props;
  return (
    <AppLayout>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <ForPressHero />
      <ForPressPressReleasesView defaultCover={data.defaultCover} pressReleases={data.pressReleases} />
    </AppLayout>
  );
};

export default ForPress;
