import { ru } from 'date-fns/locale';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import { SWRConfig } from 'swr';

import { AppContextProvider } from 'components/app-context/app-context';
import { GoogleAnalyticsScript } from 'components/google-analytics-script';

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
        <AppContextProvider>
          <Component {...restPageProps}/>
        </AppContextProvider>
      </SWRConfig>
    </>
  );
};
