import { AppProps } from 'next/app';

import { AppLayoutDataProvider } from 'providers/app-layout-data-provider';

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppLayoutDataProvider>
      <Component {...pageProps}/>
    </AppLayoutDataProvider>
  );
};
