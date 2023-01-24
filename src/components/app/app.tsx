import setDefaultOptions from 'date-fns/setDefaultOptions';
import { ru } from 'date-fns/locale';

import { GoogleAnalyticsScript } from 'components/google-analytics-script';
import { PersistentDataProvider } from 'providers/persistent-data-provider';
import { NewsProvider } from 'providers/news-provider';
import { BlogProvider } from 'providers/blog-provider';

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
    preloadedNewsState,
    ...restPageProps
  } = pageProps;

  return (
    <>
      {googleAnalyticsTrackingId && (
        <GoogleAnalyticsScript googleAnalyticsTrackingId={googleAnalyticsTrackingId}/>
      )}
      <PersistentDataProvider>
        <NewsProvider preloadedNewsState={preloadedNewsState}>
          <BlogProvider>
            <Component {...restPageProps}/>
          </BlogProvider>
        </NewsProvider>
      </PersistentDataProvider>
    </>
  );
};
