import { ru } from 'date-fns/locale';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import { SWRConfig } from 'swr';

import { GoogleAnalyticsScript } from 'components/google-analytics-script';
import { BlogProvider } from 'providers/blog-provider';
import { PersistentDataProvider } from 'providers/persistent-data-provider';

import { googleAnalyticsTrackingId } from '../../../config/env';

import type { AppProps } from 'next/app';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('mocks').then(({ setupMocks }) => setupMocks());
}

setDefaultOptions({
  locale: ru,
});

export const App = ({ Component, pageProps }: AppProps) => {
  const {
    preloadedBlogState,
    ...restPageProps
  } = pageProps;

  return (
    <>
      {googleAnalyticsTrackingId && (
        <GoogleAnalyticsScript googleAnalyticsTrackingId={googleAnalyticsTrackingId}/>
      )}
      <SWRConfig
        value={{
          revalidateIfStale: false
        }}
      >
        <PersistentDataProvider>
          <BlogProvider preloadedState={preloadedBlogState}>
            <Component {...restPageProps}/>
          </BlogProvider>
        </PersistentDataProvider>
      </SWRConfig>
    </>
  );
};
