import { NextPage } from 'next';
import Head from 'next/head';

import { AppLayout } from 'components/app-layout/index';
import { ForPressHero } from 'components/for-press-hero';
import { ForPressPressReleasesView } from 'components/for-press-press-releases-view';
import { pressRelease } from './assets/pressRelease';

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
      <ForPressHero/>
      <ForPressPressReleasesView defaultCover={pressRelease.defaultCover} pressReleases={pressRelease.pressReleases}/>
    </AppLayout>
  );
};

export default ForPress;
