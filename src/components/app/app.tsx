import Script from 'next/script';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import { ru } from 'date-fns/locale';

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
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsTrackingId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${googleAnalyticsTrackingId}');
            `}
          </Script>
        </>
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
