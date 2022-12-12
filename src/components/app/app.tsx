import { AppProps } from 'next/app';
import Script from 'next/script';

import { PersistentDataProvider } from 'providers/persistent-data-provider';
import { NewsProvider } from 'providers/news-provider';
import { BlogProvider } from 'providers/blog-provider';

import { googleAnalyticsTrackingId } from '../../../config/vars';

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
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
